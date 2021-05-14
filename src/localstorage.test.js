import Project from './proj_module';
import ToDo from './todoObj';
import { GetProjects, SaveProjects } from './localstorage';

describe('The local storage returns the saved values', () => {
  const title = 'cleaning';
  const desc = 'Clean the room';
  const ddate = '12/12/2021';
  const priority = 'high';
  const projname = 'TestProject';
  const task = new ToDo(title, desc, ddate, priority);
  const newproj = new Project(projname);
  const projlist = [];
  newproj.todolist.push(task);
  projlist.push(newproj);
  SaveProjects(projlist);

  it('GetProjects returns the saved values in local storage', () => {
    expect(GetProjects()).toEqual(projlist);
  });

  it('GetProjects does not return null', () => {
    expect(GetProjects()).not.toBeNull();
  });
});