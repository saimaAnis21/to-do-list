function project(proj_name){
    
    this.todolist = [];
    this.proj_name = proj_name;

    project.prototype.displayList = function(){
      let txt = `<table id='disptbl'><tr><th>Project</th><th>Title</th>`;
      txt = `${txt}<th>Description</th><th>Due Date</th><th>Priority</th></tr>`;
      
        txt = `${txt}<tr><td>${this.proj_name}</td>`;
        txt = `${txt}<td>${this.todolist[this.todolist.length-1].title}</td>`;
        txt = `${txt}<td>${this.todolist[this.todolist.length-1].desc}</td>`;

        txt = `${txt}<td>${this.todolist[this.todolist.length-1].ddate}</td>`;
        txt = `${txt}<td>${this.todolist[this.todolist.length-1].priority}</td>`;

      txt += '</table>';

      let todo_div = document.getElementById("todo");
      todo_div.innerHTML = txt;
    }

    project.prototype.deleteItem = function(index){
      this.todolist.splice(index,1);
    }
}

export default project;