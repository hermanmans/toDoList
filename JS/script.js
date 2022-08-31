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
      let indexNum = taskColumn.innerText.indexOf("Save Task")/10;
      return indexNum;
};

//Get index of date
function getDateIndex(){
  let dateColumn = document.getElementById("date");
    if(dateColumn.innerText === "Save Date");
      let indexNum2 = dateColumn.innerText.indexOf("Save Date")/10;
      console.log(indexNum2);
      return indexNum2;
};
//Get index of status
function getStatusIndex(){
  let statusColumn = document.getElementById("complete");
    if(statusColumn.innerText === "Toggle Status"){
      console.log("yes");
      let indexNum3 = statusColumn.innerText.indexOf("Toggle Status")/9;
      return indexNum3;
    };
};
//Get index of delete
function getDeleteIndex(){
  let deleteColumn = document.getElementById("delete");
    if(deleteColumn.innerText === "Removed");
      let indexNum4 = deleteColumn.innerText.indexOf("Removed")/12;
      return indexNum4;
};
//Store arrayAll object as an API
function setApi(obj){
 localStorage.setItem("toDo",obj);
}
function getApi(){
  let arrayHist =JSON.parse(localStorage.getItem("toDo"));
  console.log(arrayHist);
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
      history.innerHTML = 'Cancel';
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
 function theFunc(){
  reloaded.style.backgroundColor = "#d6cfa5";
  if(reloaded.innerHTML == 'Show Sorted List'){
      console.log("show sorted list was clicked");
      show.style.display = "block";
      listElement3.style.display = "block";
      listElement4.style.display = "block";
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
       //console.log(item1.innerText.length); //trying to say that when there is a duplicate do not run the function
       //console.log(item2.innerText);
       reloaded.innerHTML = 'Go Back';
       arrayStr = JSON.stringify(arrayAll);
       setApi(arrayStr);
       };
 }else {
 show.style.display = "none"
 listElement3.style.display = "none";
 listElement4.style.display = "none";
 console.log("go back was clicked");
 console.log(arrayAll);
 refresh();
 reloaded.innerHTML = 'Show Sorted List';
 };
};
  let reloaded = document.querySelector("#sortButton");
  let show = document.getElementById('sortHead');
  let history = document.querySelector("#histButton");
 //for(x=0;x<arrayall.length;x++){ ///add event listener when sort is clicked 
 //}
//window.addEventListener('load', ()=>{
  const form = document.querySelector("#taskForm");
  const input = document.querySelector("#taskInput");
  const inputDate = document.querySelector("#dateInput");
  const listElement = document.querySelector("#tasks");
  const listElement2 = document.querySelector("#date");
  const listElement3 = document.querySelector("#complete");
  const listElement4 = document.querySelector("#delete");
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
      allDelete.innerHTML = "Delete Task";

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
      listElement.appendChild(taskElement);

      dateElement.appendChild(taskDate);
      listElement2.appendChild(dateElement);

      completeElement.appendChild(completeColumn);
      listElement3.appendChild(completeElement);

      deleteElement.appendChild(deleteColumn);
      listElement4.appendChild(deleteElement);

      input.value = "";
      inputDate.value = '';
    
//Edit task event invoked when clicked on edit task.
      taskEdit.addEventListener('click', ()=>{
        
        if (taskEdit.innerText.toLowerCase()=="edit task"){
          taskInputElement.removeAttribute("readonly");
          taskInputElement.focus();
          taskEdit.innerText = "Save Task";
          console.log(arrayAll);
        }else{
          let index = getTaskIndex();
          taskInputElement.setAttribute("readonly", "readonly");
          taskEdit.innerText = "Edit Task";
          arrayAll[index].task=taskInputElement.value;
          console.log(index);
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
          console.log(arrayAll);
        };
      });
      taskComplete.addEventListener('click', ()=>{
        if(taskComplete.innerHTML === "Complete"){
          document.getElementById("sortedTask").style.textDecoration = "none";
          taskComplete.innerHTML = "Toggle Status";
          taskComplete.style.backgroundColor="#bf9076";
          console.log("Complete Clicked");
          console.log(document.getElementById("sortedTask").style.textDecoration);
        }else if (taskComplete.innerHTML === "Toggle Status"){
          let index3 = getStatusIndex();
          document.getElementById("sortedTask").childNodes[index3].style.textDecoration = "line-through";
          taskComplete.innerHTML = "Complete";
          taskComplete.style.backgroundColor="#a2be87";
          reloaded.style.backgroundColor = "yellow";
        };
      });
//Edit date event invoked when clicked on edit date. 
      dateEdit.addEventListener('click', ()=>{
        let index2 = getDateIndex();
        if (dateEdit.innerText.toLowerCase()=="edit date"){
          dateInputElement.removeAttribute("readonly");
          dateInputElement.focus();
          dateEdit.innerText = "Save Date"
          console.log(arrayAll);
        }else{
          dateInputElement.setAttribute("readonly", "readonly");
          dateEdit.innerText = "Edit Date";
          console.log(dateInputElement.value);
          console.log(arrayAll[index2].date);
          arrayAll[index2].date=dateInputElement.value;
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
          console.log(arrayAll);
        }
      });
      allDelete.addEventListener('click', ()=>{
        if(allDelete.innerHTML === "Removed"){
          listElement2.appendChild(dateElement);
          listElement.appendChild(taskElement);
          listElement3.appendChild(completeElement);
          //allDelete.innerHTML = "";
          listElement4.style.padding = 0;
          let index4 = getDeleteIndex();
          console.log(index4);
          arrayAll.splice(index4,1);
        }else if (allDelete.innerHTML === "Delete Task"){
          
          listElement2.removeChild(dateElement);
          listElement.removeChild(taskElement);
          listElement3.removeChild(completeElement);
          allDelete.innerHTML = "Removed";
          listElement4.style.padding = 0;
          //allDelete.remove();
          console.log(arrayAll);
          reloaded.style.backgroundColor = "yellow";
          arrayStr = JSON.stringify(arrayAll);
          setApi(arrayStr);
        };
      });
      arrayAll.push(task0);
      console.log(arrayAll);
      arrayStr = JSON.stringify(arrayAll);
      setApi(arrayStr);
      reloaded.addEventListener('click',theFunc);
  });
 // });
