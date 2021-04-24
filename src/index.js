import createForm from './form';
import project from './proj_module';
import toDO from './todoObj';


let content_div = document.querySelector(".content");
let projlist = []
let proj = new project("default");
projlist.push(proj);

let todo_div = document.createElement("div");
todo_div.setAttribute("id","todo");


let btn = document.createElement("button");
    btn.setAttribute("id","todo-btn");
    btn.innerText="Create new task";

let tododispbtn = document.createElement("button");
    tododispbtn.setAttribute("id","tododisp-btn");
    tododispbtn.innerText="Show all tasks";

let newprojbtn = document.createElement("button");
    newprojbtn.setAttribute("id","newproj-btn");
    newprojbtn.innerText="Add New Project";

let proj_input = document.createElement("input");
proj_input.setAttribute("id","projinput");
proj_input.setAttribute("type","text");

let form = createForm();


let form_div = document.createElement("div");
form_div.appendChild(form);

content_div.appendChild(proj_input);
content_div.appendChild(newprojbtn);
content_div.appendChild(tododispbtn);
content_div.appendChild(form_div);
content_div.appendChild(btn);
content_div.appendChild(todo_div);
let proj_cat = document.getElementById("projcat");

let populateProjcat = function(){
    
    
        let cat = document.createElement("option")
        cat.text = projlist[projlist.length-1].proj_name;
        cat.value = projlist[projlist.length-1].proj_name;
        proj_cat.add(cat);

    
}
populateProjcat();



let deleteProjItem=function(i,j){
   projlist[i].deleteItem(j);
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
    th6.innerText="Update";
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
            td6.innerHTML = `<button>Update</button>`
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

btn.addEventListener('click',() => {
    let j ="";
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let ddate = document.getElementById("ddate").value;
    let priority = document.getElementById("priority").value;
    
    let todo_item = new toDO(title,desc,ddate,priority);
    for(let i=0; i<projlist.length; i+=1){
        if(projlist[i].proj_name === proj_cat.value ){
            projlist[i].todolist.push(todo_item);
            j = i;   
        }
    }
    
    projlist[j].displayList();
    
    
});

newprojbtn.addEventListener('click',() => {
    let newproj = new project(proj_input.value)
    projlist.push(newproj);    
    populateProjcat();
});

tododispbtn.addEventListener('click',() => {
     dispTaskItems();
});









