import createForm from './form';

let content_div = document.querySelector(".content");

let form = createForm();
let form_div = document.createElement("div");
form_div.setAttribute("class","border-deco p-10");
form_div.appendChild(form);

let todo_div = document.createElement("div");
todo_div.setAttribute("id","todo");

let newitembtn = document.createElement("button");
    newitembtn.setAttribute("id","todo-btn");
    newitembtn.setAttribute("class","float-r");
    newitembtn.innerText="Create new Item";


let newprojdiv = document.createElement("div");
newprojdiv.setAttribute("id","newprojdiv");
newprojdiv.setAttribute("class","border-deco p-10 mb-10 txt-align-c");

let newprojbtn = document.createElement("button");
newprojbtn.setAttribute("id","newproj-btn");
newprojbtn.setAttribute("class","mr-10");
newprojbtn.innerText="Add New Project";

let proj_input = document.createElement("input");
proj_input.setAttribute("id","projinput");
proj_input.setAttribute("type","text");

newprojdiv.appendChild(newprojbtn);
newprojdiv.appendChild(proj_input);

export { content_div, todo_div, form_div, newitembtn, newprojbtn, proj_input, newprojdiv };