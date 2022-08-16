
class Task{
    constructor(task, date){
    this.task = task;
    this.date = date;
    //return this; is implicit with Constructor Functions
  }
  } 
    let array1 = [];
    let clickCount =[];
    ticker =[]
    const btnClicked = document.getElementById("submit1");
    btnClicked.addEventListener("click",() =>{
      clickCount++;
      ticker.push(clickCount);
      let taskName = document.getElementById("taskInput").value;
      let dueDate = new Date(document.getElementById("dateInput").value);
      const task0 = new Task(taskName,dueDate);
      array1.push(task0);
      array1.sort(function (a, b) {
        return a._date - b._date;
      });
      console.log(array1);
//create Elements
        let Items1 = document.createElement("li");
        let Items2 = document.createElement("li");
        let editButton = document.createElement("button");
        let strikeButton = document.createElement("button");
    //create Nodes
        let taskNode = document.createTextNode(task0.task);
        let dateNode = document.createTextNode(task0.date);
        let editNode = document.createTextNode("Edit Task");
        let strikeNode = document.createTextNode("Mark as done");
    //append Nodes 
        Items1.appendChild(taskNode);
        Items2.appendChild(dateNode);
        editButton.appendChild(editNode);
        strikeButton.appendChild(strikeNode);
    //print to viewport element
        document.getElementById("tasksColumn").appendChild(Items1);
        document.getElementById("datesColumn").appendChild(Items2);
        document.getElementById("editColumn").appendChild(editButton);
        document.getElementById("strikeColumn").appendChild(strikeButton);

        console.log(ticker);
   
    });
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const editClicked = document.getElementById("editColumn");
    editClicked.addEventListener("click",() =>{
      console.log(array1.indexOf[Task.prototype()]);
        
    });



    const sortClicked = document.getElementById("sortList");
    sortClicked.addEventListener("click",() =>{
        document.getElementById("tasksColumn").remove();
        document.getElementById("datesColumn").remove();
        document.getElementById("editColumn").remove();
        document.getElementById("strikeColumn").remove();

        e1 = document.createElement("ul").setAttribute("id","tasksColumn2");
        e2 = document.createElement("ul").setAttribute("id","datesColumn2");
        e3 = document.createElement("ul").setAttribute("id","editColumn2");
        e4 = document.createElement("ul").setAttribute("id","strikeColumn2");

        
  //create Nodes
        for (x = 0;x<array1.length;x++){
            let Items1 = document.createElement("li");
            let Items2 = document.createElement("li");
            let editButton = document.createElement("button");
            let strikeButton = document.createElement("button");
            let taskNode = document.createTextNode(array1[x]._task);
            let dateNode = document.createTextNode(array1[x]._date);
            let editNode = document.createTextNode("Edit Task");
            let strikeNode = document.createTextNode("Mark as done");
        //append Nodes 
            Items1.appendChild(taskNode);
            Items2.appendChild(dateNode);
            editButton.appendChild(editNode);
            strikeButton.appendChild(strikeNode);
        //print to viewport element
        
            document.getElementById("tasksColumn2").appendChild(Items1);
            document.getElementById("datesColumn2").appendChild(Items2);
            document.getElementById("editColumn2").appendChild(editButton);
            document.getElementById("strikeColumn2").appendChild(strikeNode);

        }
    });