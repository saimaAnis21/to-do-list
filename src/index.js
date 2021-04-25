import project from './proj_module';
import toDO from './todoObj';
import { content_div, todo_div, form_div, newitembtn, newprojdiv, newprojbtn, proj_input } from './DOMelements';

let projlist = []

content_div.appendChild(newprojdiv);
content_div.appendChild(form_div);

content_div.appendChild(todo_div);

let proj_cat = document.getElementById("projcat");
const saveProjects = () => {
    const str = JSON.stringify(projlist);
    localStorage.setItem('projlist', str); 
  };
  
  const getProjects = () => {
    const str = localStorage.getItem('projlist');
    projlist = JSON.parse(str);
    if (!projlist) {
        projlist = [];
        let proj = new project("default");
        projlist.push(proj);
    }
    
  };

  let populateProjcat = function(){
    proj_cat.innerHTML="";
    for(let i=0; i<projlist.length; i += 1) {

        let cat = document.createElement("option")
        cat.text = projlist[i].proj_name;
        cat.value = projlist[i].proj_name;
        proj_cat.add(cat);
    }


}

let newProj = function(){
    let newproj = new project(proj_input.value)
    projlist.push(newproj);
    saveProjects();    
    populateProjcat();
    
}

let deleteProjItem = function(i,j){
    
    projlist[i].todolist.splice(j,1);
    saveProjects();
    dispTaskItems();
    
 }
 
let addProjItem = function(){
    let j ="";
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let ddate = document.getElementById("ddate").value;
    let priority = document.getElementById("priority").value;
    
    let todo_item = toDO(title,desc,ddate,priority);
    for(let i=0; i<projlist.length; i+=1){
        if(projlist[i].proj_name === proj_cat.value ){
            projlist[i].todolist.push(todo_item);
            j = i;   
        }
    }
    saveProjects();
    dispTaskItems();
    
}

 let dispTaskItems = function(){
     
     let tbl = document.createElement("table");
     tbl.setAttribute("id","disptbl");
     let trh = document.createElement("tr");
     let th1 = document.createElement("th");
     th1.innerText="Project";
     let th2 = document.createElement("th");
     th2.innerText="Title";
     let th3 = document.createElement("th");
     th3.innerText="Description";
     let th4 = document.createElement("th");
     th4.innerText="Due Date";
     let th5 = document.createElement("th");
     th5.innerText="Priority";
     let th6 = document.createElement("th");
     th6.innerText="Select for update";
     let th7 = document.createElement("th");
     th7.innerText="Delete";
     trh.appendChild(th1);
     trh.appendChild(th2);
     trh.appendChild(th3);
     trh.appendChild(th4);
     trh.appendChild(th5);
     trh.appendChild(th6);
     trh.appendChild(th7);
     tbl.appendChild(trh);
     
     for(let i = projlist.length-1; i >= 0; i -= 1){
         for (let j = projlist[i].todolist.length -1; j >= 0; j -= 1) {
             
             let tr= document.createElement("tr");
             let td1= document.createElement("td");
             td1.innerText=`${projlist[i].proj_name}`;
             let td2= document.createElement("td");
             td2.innerText=`${projlist[i].todolist[j].title}`;
             let td3= document.createElement("td");
             td3.innerText=`${projlist[i].todolist[j].desc}`;
             let td4= document.createElement("td");
             td4.innerText=`${projlist[i].todolist[j].ddate}`
             let td5= document.createElement("td");
             td5.innerText=`${projlist[i].todolist[j].priority}`;
             let td6= document.createElement("td");

             let updbtn = document.createElement("button");
             updbtn.hidden= true;
             updbtn.setAttribute("class","updatebuttons");
             updbtn.setAttribute("id",`updbtn${i}-${j}`);
             updbtn.innerText="Update";
             updbtn.addEventListener('click',() => {
                projlist[i].todolist[j].title = document.getElementById("title").value;
                projlist[i].todolist[j].desc = document.getElementById("desc").value;
                projlist[i].todolist[j].ddate = document.getElementById("ddate").value;
                projlist[i].todolist[j].priority = document.getElementById("priority").value;
                newitembtn.hidden = false;
                dispTaskItems();
             });
             let selectbtn = document.createElement("button");
             selectbtn.setAttribute("id",`selectbtn${i}-${j}`);
             selectbtn.innerText="Select";
             selectbtn.addEventListener('click',() => {
                 
                 let updbuttons = document.getElementsByClassName("updatebuttons");
                for(let x=0; x<updbuttons.length; x += 1){
                    updbuttons[x].hidden=true;
                }
                document.getElementById("title").value = projlist[i].todolist[j].title;
                document.getElementById("desc").value = projlist[i].todolist[j].desc;
                document.getElementById("ddate").value = projlist[i].todolist[j].ddate;
                document.getElementById("priority").value = projlist[i].todolist[j].priority;
                
                document.getElementById(`updbtn${i}-${j}`).hidden = false;
                newitembtn.hidden = true;
                
             });

             td6.appendChild(selectbtn);
             td6.appendChild(updbtn);

             let td7= document.createElement("td");
             
             let delbtn = document.createElement("button");
             delbtn.setAttribute("id",`delbtn${i}-${j}`);
             delbtn.innerText="Delete";
             delbtn.addEventListener('click',() => {
                 deleteProjItem(i,j);
             });
             td7.appendChild(delbtn);
             tr.appendChild(td1);
             tr.appendChild(td2);
             tr.appendChild(td3);
             tr.appendChild(td4);
             tr.appendChild(td5);
             tr.appendChild(td6);
             tr.appendChild(td7);
             tbl.appendChild(tr);
           }
           
     }
 
     todo_div.innerHTML = "";
     todo_div.appendChild(tbl);
 
 }

getProjects();
populateProjcat();
dispTaskItems();

let submit = document.getElementById("submitbtn");
submit.addEventListener('click',() => {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let ddate = document.getElementById("ddate").value;
    let priority = document.getElementById("priority").value;

    if(title == "" || desc == "" || ddate == ""){

    }else{
        addProjItem();
    }
});

newprojbtn.addEventListener('click',() => {
   newProj();
});

