
class Task{
    constructor(task, date){
    this._task = task;
    this._date = date;
    //return this; is implicit with Constructor Functions
  }
  } 
    let array1 = [];
    let array2 = [];
    const btnClicked = document.getElementById("submit1");
    btnClicked.addEventListener("click",() =>{
      let col1 = document.createElement("li");
      let col2 = document.createElement("li");
      let col3 = document.createElement("button");
      let col4 = document.createElement("button");

      let taskName = document.getElementById("taskInput").value;
      let dueDate = new Date(document.getElementById("dateInput").value);
      const task0 = new Task(taskName,dueDate);
      let x = document.createTextNode(task0._task);
      let y = document.createTextNode(task0._date);
      let z = document.createTextNode("Edit Task");
      let a = document.createTextNode("Mark as done");

      col1.appendChild(x);
      col2.appendChild(y);
      col3.appendChild(z);
      col4.appendChild(a);
      
      
  //create more instances of this task using a if statement and submission counter.
      let n1 = document.getElementById("tasksColumn").appendChild(col1);
      let n2 = document.getElementById("datesColumn").appendChild(col2);
      let n3 = document.getElementById("editColumn").appendChild(col3);
      let n4 = document.getElementById("strikeColumn").appendChild(col4);
  
      
      
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
      let editArray = (Array.from(editNodes)); //nodes converted to an array of edit buttons
      let taskArray = (Array.from(taskNodes)); //nodes converted to an array of list items
      let editIndex = editArray.indexOf(col3);

      array1.push(task0);
      
      console.log(taskArray);
      console.log(taskArray[0]);
      console.log(array1);
      //console.log(array1.length);
      //console.log(task2);
      const handlerEdit = () =>{
        let ref = editIndex;
        let newTask =document.createTextNode(prompt("Please enter new task"));
        let newDate =document.createTextNode(prompt("Please enter new due date"));
        let taskElement = document.getElementById("tasksColumn").children[ref];
        taskElement.replaceChild(newTask,x);
        let dateElement = document.getElementById("datesColumn").children[ref];
        dateElement.replaceChild(newDate,y);
          //let x1 = document.replaceChild(newTask,col1);
        //let y1 = document.createTextNode(newDate);
        //col1.replaceChild(x1,x);
        //col2.replaceChild(y1,y);
        newObj = Object.create(task0);
        newObj._task = newTask.nodeValue;
        newObj._date = new Date(newDate.nodeValue);
        array1.splice(ref,1,newObj);
        console.log(newObj);
      }
      const editClicked = n3;
      editClicked.addEventListener("click", handlerEdit);
        //document.getElementById("taskInput").innerHTML=array1[0]._task; 

      const sortClicked = document.getElementById("sortList");
      sortClicked.addEventListener("click",() =>{
        array1.sort(function (a, b) {
          return a._date - b._date
        });
        for (p=0;p<array1.length;p++){
          let xx = document.createTextNode(array1[p]._task);
          let yy = document.createTextNode(array1[p]._date);
          let zz = document.createTextNode("Edit Task");
          let aa = document.createTextNode("Mark as done");

          col1.remove(x);
          col2.remove(y);
          col3.remove(z);
          col4.remove(a);

          let col5 = document.createElement("li");
          let col6 = document.createElement("li");
          let col7 = document.createElement("button");
          let col8 = document.createElement("button");

          col5.appendChild(xx);
          col6.appendChild(yy);
          col7.appendChild(zz);
          col8.appendChild(aa);
          
          let n1 = document.getElementById("tasksColumn").appendChild(col5);
          let n2 = document.getElementById("datesColumn").appendChild(col6);
          let n3 = document.getElementById("editColumn").appendChild(col7);
          let n4 = document.getElementById("strikeColumn").appendChild(col8);
         
          
        }
        return array1 // GOOGLE HOW TO RETURN AL
      });
      
      });
      
// on click if your let a = editcolum node index; edit taskcolum node inedx[a] 
//edit taskcolum node inedx[a] 
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      