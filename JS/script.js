class Task{
  constructor(task, date){
  this.task = task;
  this.date = date;
  }
}
//Functions
//Get index of task
function getTaskIndex(){
  let taskColumn = document.getElementById("tasks");
    if(taskColumn.innerText === "Save Task");
      let indexTask = taskColumn.innerText.indexOf("Save Task")/10;
      return indexTask;
};
//Get index of date
function getDateIndex(){
  let dateColumn = document.getElementById("date");
    if(dateColumn.innerText === "Save Date");
      let indexDate = dateColumn.innerText.indexOf("Save Date")/10;
      return indexDate;
};
//Get index of status
function getStatusIndex(){
  let statusColumn = document.getElementById("complete");
    if(statusColumn.innerText === "Toggle Status"){
      let indexStatus = statusColumn.innerText.indexOf("Toggle Status")/9;
      return indexStatus;
    };
};
//Get index of delete
function getDeleteIndex(){
  let deleteColumn = document.getElementById("delete");
    if(deleteColumn.innerText === "Delete");
      let indexDelete = deleteColumn.innerText.indexOf("Delete")/5;
      return indexDelete;
};
//Store arrayAll object as an API
function setApi(obj){
 localStorage.setItem("toDo",obj);
}
//Preview previous sessions admitted tasks
function getApi(){
  let arrayHist =JSON.parse(localStorage.getItem("toDo"));
  if(arrayHist && history.innerHTML == 'Show Previous Tasks'){
    for(x=0;x<arrayHist.length;x++){
      sortApi(arrayHist);
      let text3 = document.getElementById("prevTasks");
      let item3 = document.createElement("div");
      text3.appendChild(item3);
      item3.appendChild(document.createTextNode(arrayHist[x].task));
      let text4 = document.getElementById("prevDates");
      let item4 = document.createElement("div");
      text4.appendChild(item4);
      item4.appendChild(document.createTextNode(arrayHist[x].date));
      history.innerHTML = 'Hide Previous Tasks';
    };
    document.querySelector(".preview").style.display = "flex";
  }else {
    document.getElementById("prevTasks").innerHTML ="";
    document.getElementById("prevDates").innerHTML ="";
    history.innerHTML = 'Show Previous Tasks';
    document.querySelector(".preview").style.display = "none";
 };
};
//Sort arrayAll Obj
function sortApi(arg){
  arg.sort((a, b)=>{
    if(a.date > b.date){
      return 1;
    }else if(a.date < b.date){
      return -1
    }else{
      return 0;
    }
  });
 }
 function refresh(){
  document.getElementById("sortedTask").innerHTML="";
  document.getElementById("sortedDate").innerHTML="";
}
 function presentList(){
  sortButton.style.backgroundColor = "#d6cfa5";
  if(sortButton.innerHTML == 'Print To Do List'){
      sortHeading.style.display = "block";
      statusDiv.style.display = "block";
      deleteDiv.style.display = "block";
      document.querySelector(".taskList").style.display = "none";
     for(x=0;x<arrayAll.length;x++){
       sortApi(arrayAll);
       let text1 = document.getElementById("sortedTask");
       let item1 = document.createElement("div");
       text1.appendChild(item1);
       item1.appendChild(document.createTextNode(arrayAll[x].task));
       let text2 = document.getElementById("sortedDate");
       let item2 = document.createElement("div");
       text2.appendChild(item2);
       item2.appendChild(document.createTextNode(arrayAll[x].date));
       sortButton.innerHTML = 'Go Back/Refresh';
       arrayStr = JSON.stringify(arrayAll);
       setApi(arrayStr);
       };
 }else {
 sortHeading.style.display = "none"
 statusDiv.style.display = "none";
 deleteDiv.style.display = "none";
 refresh();
 sortButton.innerHTML = 'Print To Do List';
 };
};
//Define variables for element selection
  let sortButton = document.querySelector("#sortButton");
  let sortHeading = document.getElementById('sortHead');
  let history = document.querySelector("#histButton");
  const form = document.querySelector("#taskForm");
  const input = document.querySelector("#taskInput");
  const inputDate = document.querySelector("#dateInput");
  const taskDiv = document.querySelector("#tasks");
  const dateDiv = document.querySelector("#date");
  const statusDiv = document.querySelector("#complete");
  const deleteDiv = document.querySelector("#delete");
//User input function that stores values, creates a new class, pushed to an arrayAll.  
  history.addEventListener('click',getApi);
  let arrayAll = [];
    form.addEventListener('submit',(e) =>{
      e.preventDefault();
      let task = input.value;
      const date = inputDate.value;
      const task0 = new Task(task,date);
      if (!task){
        alert("Missing Field");
        return;
      }
      if(!date){
        alert("Missing Field");
        return;
      }
//Creating elements for: tasks and dates and their content   
      const taskElement = document.createElement("div");
      taskElement.classList.add("tasks");
      const taskContent = document.createElement("div");
      taskContent.classList.add("content");

      const dateElement = document.createElement("div");
      dateElement.classList.add("date");
      const dateContent = document.createElement("div");
      dateContent.classList.add("content2");

      const completeElement = document.createElement("div");
      completeElement.classList.add("complete");

      const deleteElement = document.createElement("div");
      deleteElement.classList.add("delete");

//Content appointed as child of elements       
      taskElement.appendChild(taskContent);
      dateElement.appendChild(dateContent);

//Input window created for tasks and dates
      let taskInputElement = document.createElement("input");
      taskInputElement.classList.add("class");
      taskInputElement.type = "text";
      taskInputElement.value = task;
      taskInputElement.setAttribute("readonly","readonly");
      taskContent.appendChild(taskInputElement);

      const dateInputElement = document.createElement("input");
      dateInputElement.classList.add("class2");
      dateInputElement.type = "date";
      dateInputElement.value = date;
      dateInputElement.setAttribute("readonly","readonly");
      dateContent.appendChild(dateInputElement);  

      const taskAction = document.createElement("div");
      taskAction.classList.add("actions");

      const taskDate = document.createElement("div");
      taskDate.classList.add("dates");

      const completeColumn = document.createElement("div");
      completeColumn.classList.add("completeCol");

      const deleteColumn = document.createElement("div");
      deleteColumn.classList.add("deleteCol");

//Creating edit and delete buttons and appointing relevant classes
      const taskEdit = document.createElement("button");
      taskEdit.classList.add("editTask");
      taskEdit.innerHTML = "Edit Task";

      const dateEdit = document.createElement("button");
      dateEdit.classList.add("editDate");
      dateEdit.innerHTML = "Edit Date";

      const allDelete = document.createElement("button");
      allDelete.classList.add("deleteAll");
      allDelete.innerHTML = "Edit";

      let taskComplete= document.createElement("button");
      taskComplete.classList.add("completed");
      taskComplete.innerHTML = "Toggle Status";
      taskComplete.style.backgroundColor="#bf9076";

//Buttons being appended when add event is invoked
      taskAction.appendChild(taskEdit);
      taskDate.appendChild(dateEdit);
      completeColumn.appendChild(taskComplete);
      deleteColumn.appendChild(allDelete);/////////////

      taskElement.appendChild(taskAction);
      taskDiv.appendChild(taskElement);

      dateElement.appendChild(taskDate);
      dateDiv.appendChild(dateElement);

      completeElement.appendChild(completeColumn);
      statusDiv.appendChild(completeElement);

      deleteElement.appendChild(deleteColumn);
      deleteDiv.appendChild(deleteElement);

      input.value = "";
      inputDate.value = '';
    
//Edit task event invoked when clicked on edit task.
      taskEdit.addEventListener('click', ()=>{
        if (taskEdit.innerText.toLowerCase()=="edit task"){
          taskInputElement.removeAttribute("readonly");
          taskInputElement.focus();
          taskEdit.innerText = "Save Task";
        }else{
          let taskIndex = getTaskIndex();
          taskInputElement.setAttribute("readonly", "readonly");
          taskEdit.innerText = "Edit Task";
          arrayAll[taskIndex].task=taskInputElement.value;
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
        };
      });
      taskComplete.addEventListener('click', ()=>{
        if(taskComplete.innerHTML === "Complete"){
          document.getElementById("sortedTask").style.textDecoration = "none";
          taskComplete.innerHTML = "Toggle Status";
          taskComplete.style.backgroundColor="#bf9076";
        }else if (taskComplete.innerHTML === "Toggle Status"){
          taskComplete.innerHTML = "Complete";
          taskComplete.style.backgroundColor="#a2be87";
        };
      });
//Edit date event invoked when clicked on edit date. 
      dateEdit.addEventListener('click', ()=>{
        let dateIndex = getDateIndex();
        if (dateEdit.innerText.toLowerCase()=="edit date"){
          dateInputElement.removeAttribute("readonly");
          dateInputElement.focus();
          dateEdit.innerText = "Save Date"
        }else{
          dateInputElement.setAttribute("readonly", "readonly");
          dateEdit.innerText = "Edit Date";
          arrayAll[dateIndex].date=dateInputElement.value;
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
        }
      });
      allDelete.addEventListener('click', ()=>{
        if(allDelete.innerHTML === "Delete"){
          deleteDiv.style.padding = 0;
          let deleteIndex = getDeleteIndex();
          arrayAll.splice(deleteIndex,1);
          deleteDiv.removeChild(document.getElementById("delete").children[deleteIndex]);
          statusDiv.removeChild(document.getElementById("complete").children[deleteIndex]);
          dateDiv.remove(document.getElementById("sortedDate").children[deleteIndex]);
          taskDiv.remove(document.getElementById("sortedTask").children[deleteIndex]);
          sortButton.style.backgroundColor = "yellow";
        }else if (allDelete.innerHTML === "Edit"){
          allDelete.innerHTML = "Delete";
          deleteDiv.style.padding = 0;
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
        };
      });
      arrayAll.push(task0);
      arrayStr = JSON.stringify(arrayAll);
      setApi(arrayStr);
      sortButton.addEventListener('click',presentList);
  });
  window.addEventListener('load',getApi());
