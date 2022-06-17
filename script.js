
class Task{
    constructor(task, date){
    this._task = task;
    this._date = date;
    //return this; is implicit with Constructor Functions
  }
  } 

    const btnClicked = document.getElementById("submit1");
    btnClicked.addEventListener("click",() =>{
      let li = document.createElement("li");
      let taskName = document.getElementById("taskInput").value;
      let dueDate = document.getElementById("dateInput").value;
      let x = document.createTextNode(taskName);
      let y = document.createTextNode(dueDate);
      li.appendChild(x);
      li.appendChild(y);
      
      const task1 = new Task(taskName,dueDate);
  //create more instances of this task using a if statement and submission counter.
      
      document.getElementById("outputlist").appendChild(li);
  
      
  
  
     // var li = document.createElement("li");
      //var inputValue = document.getElementById("task").value;
      //var t = document.createTextNode(inputValue);
     // li.appendChild(t);
  
      
  
      //const task2 = new Task(taskName,dueDate);
      //document.getElementById("output3").innerHTML=task2._firstname;
      //document.getElementById("output4").innerHTML=task2._lastname;
      
      // BAD practice. Use get method to include privacy task.firstname//
      //console.log(array1);
      //console.log(array1.length);
      //console.log(task2);
    });
  
    