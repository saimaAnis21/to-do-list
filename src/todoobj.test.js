import ToDo from './todoObj';

describe('The toDo class returns the stored values', () => {
  const title = 'cleaning';
  const desc = 'Clean the room';
  const ddate = '12/12/2021';
  const priority = 'high';
  const Task = new ToDo(title, desc, ddate, priority);

  it('title is returned correctly', () => {
    expect(Task.title).toBe(title);
  });

  it('desc is returned correctly', () => {
    expect(Task.desc).toBe(desc);
  });

  it('date is returned correctly', () => {
    expect(Task.ddate).toBe(ddate);
  });

  it('priority is returned correctly', () => {
    expect(Task.priority).toBe(priority);
  });
});