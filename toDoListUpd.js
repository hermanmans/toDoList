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
      this._defaultTagName = "general"
  };
      get tagname(){
        return this._tagname;
      };

      get "general"(){
        return this._defaultTagName;
      };

};

class Status extends Tags{
  constructor(title, description,date_created,date_due, tagname,){
    super(title, description,date_created,date_due, tagname);
  };

  static status (completed){
    this._completed = completed;
    return completed;
  };

}
///////////////////
let todo = new Status();
let submitFunc = function(){
    todo._title = document.getElementById("title").value;
    todo._description = document.getElementById("description").value;
    todo._date_created = document.getElementById("start").value;
    todo._date_due = document.getElementById("due").value;
    Status.status = true;
    todo._tagname = document.getElementById("tags").value;
     

    console.log(todo);
};

let submitButton = document.getElementById("submit1");
  submitButton.addEventListener('click',submitFunc);