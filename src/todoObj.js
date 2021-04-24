class toDo{
    constructor(title,desc,ddate,priority) {
        this.title = title;
        this.desc = desc;
        this .ddate= ddate;
        this.priority = priority;
    }

    get title() {
        return this._title;
      }
    
      get desc() {
        return this._desc;
      }
    
      get ddate() {
        return this._ddate;
      }
    
      get priority() {
        return this._priority;
      }

      set title(val) {
        this._title = val;
      }
    
      set desc(val) {
        this._desc = val;
      }
    
      set ddate(val) {
        this._ddate = val;
      }
    
      set priority(val) {
        this._priority = val;
      }
}

export default toDo;