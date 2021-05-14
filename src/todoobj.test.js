import toDo from './todoObj';

describe('The toDo class returns the stored values', () => {
    let title = "cleaning";
    let desc = "Clean the room";
    let ddate = "12/12/2021";
    let priority = "high";
    let task = new toDo(title,desc,ddate,priority);

        it('title is returned correctly', () => {            
            expect(task.title).toBe(title);
        })

        it('desc is returned correctly', () => {            
            expect(task.desc).toBe(desc);
        })

        it('date is returned correctly', () => {            
            expect(task.ddate).toBe(ddate);
        })

        it('priority is returned correctly', () => {            
            expect(task.priority).toBe(priority);
        })
})