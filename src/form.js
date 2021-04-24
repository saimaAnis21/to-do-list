function createForm(){
    let form = document.createElement("form");
    form.setAttribute("method","post");
// Title
    let title_label= document.createElement("label");
    title_label.innerText="Title: ";

    let title_input = document.createElement("input");
    title_input.setAttribute("id", "title");
    title_input.setAttribute("type", "text");
    title_input.setAttribute("name", "title");
    title_input.setAttribute("placeholder", "Title of Task");
    title_input.setAttribute("required","true");
    title_input.setAttribute("maxlength","10");
    title_input.setAttribute("class","mr-10");
// desc
    let desc_label= document.createElement("label");
    desc_label.innerText="Description: ";

    let desc_input = document.createElement("input");
    desc_input.setAttribute("id", "desc");
    desc_input.setAttribute("type", "text");
    desc_input.setAttribute("name", "desc");
    desc_input.setAttribute("placeholder", "Description of Task");
    desc_input.setAttribute("required","true");
    desc_input.setAttribute("maxlength","50");
    desc_input.setAttribute("class","mr-10");

//due date

let date_label= document.createElement("label");
    date_label.innerText="Due Date: ";

    let date_input = document.createElement("input");
    date_input.setAttribute("id", "ddate");
    date_input.setAttribute("type", "date");
    date_input.setAttribute("name", "date");    
    date_input.setAttribute("required","true");
    date_input.setAttribute("class","mr-10");

//Priority
let priority_label= document.createElement("label");
    priority_label.innerText="Priority: ";

let priority_input = document.createElement("select"); 
    priority_input.setAttribute("id","priority");
    priority_input.setAttribute("name","priority");
    priority_input.setAttribute("class","mr-10");
    
let option_high = document.createElement("option");
    option_high.text = "High";
    option_high.value = "high";
    
    priority_input.add(option_high);

let option_med = document.createElement("option");
    option_med.text = "Medium";
    option_med.value = "medium";
    option_med.selected = "true";
    priority_input.add(option_med);

let option_low = document.createElement("option");
    option_low.text = "low";
    option_low.value = "low";
    priority_input.add(option_low);

let proj_cat = document.createElement("select");
proj_cat.setAttribute("id","projcat");

    form.appendChild(title_label);
    form.appendChild(title_input);
    form.appendChild(desc_label);
    form.appendChild(desc_input);
    form.appendChild(date_label);
    form.appendChild(date_input);
    form.appendChild(priority_label);
    form.appendChild(priority_input);
    form.appendChild(proj_cat);
    

    return form;
}

export default createForm;