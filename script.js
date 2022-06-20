
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
      const task = new Task(taskName,dueDate);
      let x = document.createTextNode(task._task);
      let y = document.createTextNode(task._date);
      let z = document.createTextNode("Edit Task");
      let a = document.createTextNode("Mark as done");

      col1.appendChild(x);
      col2.appendChild(y);
      col3.appendChild(z);
      col4.appendChild(a);
      
      
  //create more instances of this task using a if statement and submission counter.
      document.getElementById("tasksColumn").appendChild(col1);
      document.getElementById("datesColumn").appendChild(col2);
      document.getElementById("editColumn").appendChild(col3);
      document.getElementById("strikeColumn").appendChild(col4);
  
      
      
      //console.log(document.getElementById("editColumn").childNodes[0]);
     // var li = document.createElement("li");
      //var inputValue = document.getElementById("task").value;
      //var t = document.createTextNode(inputValue);
     // li.appendChild(t);
  
      
  
      //const task2 = new Task(taskName,dueDate);
      //document.getElementById("output3").innerHTML=task2._firstname;
      //document.getElementById("output4").innerHTML=task2._lastname;
      
      let editNodes = document.getElementById("editColumn").childNodes;
      let taskNodes = document.getElementById("tasksColumn").childNodes;
      let editArray = (Array.from(editNodes));
      let taskArray = (Array.from(taskNodes));
      console.log(taskArray);
      

      //console.log(array1.length);
      //console.log(task2);
      const handlerEdit = () =>{
        let newTask =document.createTextNode(prompt("Please enter new task"));
        let newDate = prompt("Please enter new due date");
        let x1 = document.replaceChild(newTask,col1);
        console.log(newTask);
        console.log(array1);
        //let y1 = document.createTextNode(newDate);
        //col1.replaceChild(x1,x);
        //col2.replaceChild(y1,y);
       
      }
      const editClicked = document.getElementById("editColumn");
      editClicked.addEventListener("click", handlerEdit)
        //document.getElementById("taskInput").innerHTML=array1[0]._task;
      
      
      if (editNodes.index)
      
      
      array1.push(task);
      console.log(array1);
      console.log(x[1]);
      });
      
// on click if your let a = editcolum node index; edit taskcolum node inedx[a] 
//edit taskcolum node inedx[a] 

