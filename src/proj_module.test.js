import Project from './proj_module';
import toDo from './todoObj';

describe('The Project class returns the correct values', () => {
    let title = "cleaning";
    let desc = "Clean the room";
    let ddate = "12/12/2021";
    let priority = "high";
    let projname = "TestProject";
    let task = new toDo(title,desc,ddate,priority);
    let newproj = new Project(projname);
    newproj.todolist.push(task);

        it('Project name is returned correctly', () => {            
            expect(newproj.proj_name).toBe(projname);
        })

        
})
