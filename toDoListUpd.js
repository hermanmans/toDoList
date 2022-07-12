class Task{
    constructor(title, description,date_created,date_due){
    this._title = title;
    this._description = description;
    this._date_created = date_created;
    this._date_due = date_due;
    };
  };
  
  class Tags extends Task {
    constructor(title, description,date_created,date_due, tagname){
        super(title, description,date_created,date_due);
        this._tagname = tagname;
        this._defaultTagName = 'general';
    };
        get tagname(){
        return this._tagname;
        };
  
  };

  let todo = new Tags();

  console.log(todo);