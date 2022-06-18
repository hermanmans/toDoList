
class Task{
    constructor(task, date){
    this._task = task;
    this._date = date;
    //return this; is implicit with Constructor Functions
  }
  } 
    let array1 = [];
    const btnClicked = document.getElementById("submit1");
    btnClicked.addEventListener("click",() =>{
      let col1 = document.createElement("li");
      let col2 = document.createElement("li");
      let col3 = document.createElement("button");
      let col4 = document.createElement("button");

      let taskName = document.getElementById("taskInput").value;
      let dueDate = document.getElementById("dateInput").value;
      let x = document.createTextNode(taskName);
      let y = document.createTextNode(dueDate);
      let z = document.createTextNode("Edit Task");
      let a = document.createTextNode("Mark as done");

      col1.appendChild(x);
      col2.appendChild(y);
      col3.appendChild(z);
      col4.appendChild(a);
      
      const task1 = new Task(taskName,dueDate);
  //create more instances of this task using a if statement and submission counter.
      
      document.getElementById("tasksColumn").appendChild(col1);
      document.getElementById("datesColumn").appendChild(col2);
      document.getElementById("editColumn").appendChild(col3);
      document.getElementById("strikeColumn").appendChild(col4);
  
      
  
  
     // var li = document.createElement("li");
      //var inputValue = document.getElementById("task").value;
      //var t = document.createTextNode(inputValue);
     // li.appendChild(t);
  
      
  
      //const task2 = new Task(taskName,dueDate);
      //document.getElementById("output3").innerHTML=task2._firstname;
      //document.getElementById("output4").innerHTML=task2._lastname;
      
      array1.push(task1);
      console.log(array1);

      //console.log(array1.length);
      //console.log(task2);
      
    });
  
    const editClicked = document.getElementById("editColumn");
      editClicked.addEventListener("click",() =>{
        array1[0]._task = "Herman Edited This";
        console.log(array1);
      });