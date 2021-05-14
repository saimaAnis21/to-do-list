import Project from './proj_module';
import ToDo from './todoObj';

describe('The Project class returns the correct values', () => {
  const title = 'cleaning';
  const desc = 'Clean the room';
  const ddate = '12/12/2021';
  const priority = 'high';
  const projname = 'TestProject';
  const task = new ToDo(title, desc, ddate, priority);
  const newproj = new Project(projname);
  newproj.todolist.push(task);

  it('Project name is returned correctly', () => {
    expect(newproj.proj_name).toBe(projname);
  });

  it('Project name does not return null', () => {
    expect(newproj.proj_name).not.toBeNull();
  });
});
