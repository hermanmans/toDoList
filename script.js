class Task{
  constructor(task, date){
  this.task = task;
  this.date = date;
  }
}
window.addEventListener('load', ()=>{
  const form = document.querySelector("#taskForm");
  const input = document.querySelector("#taskInput");
  const inputDate = document.querySelector("#dateInput");
  const listElement = document.querySelector("#tasks");
  const listElement2 = document.querySelector("#date");

  let arrayall = [];
    form.addEventListener('submit',(e) =>{
      e.preventDefault();
      const task = input.value;
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

//Content appointed as child of elements       
      taskElement.appendChild(taskContent);
      dateElement.appendChild(dateContent);

//Input window created for tasks and dates
      const taskInputElement = document.createElement("input");
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

//Creating edit and delete buttons and appointing relevant classes
      const taskEdit = document.createElement("button");
      taskEdit.classList.add("editTask");
      taskEdit.innerHTML = "Edit Task";

      const dateEdit = document.createElement("button");
      dateEdit.classList.add("editDate");
      dateEdit.innerHTML = "Edit Date";

      const taskDelete = document.createElement("button");
      taskDelete.classList.add("deleteTask");
      taskDelete.innerHTML = "Delete Task";

      const dateDelete = document.createElement("button");
      dateDelete.classList.add("deleteDate");
      dateDelete.innerHTML = "Delete Date";

//Buttons being appended when add event is invoked
      taskAction.appendChild(taskEdit);
      taskAction.appendChild(taskDelete);

      taskDate.appendChild(dateEdit);
      taskDate.appendChild(dateDelete);

      taskElement.appendChild(taskAction);
      listElement.appendChild(taskElement);

      dateElement.appendChild(taskDate);
      listElement2.appendChild(dateElement);

      input.value = "";

      inputDate.value = '';

//Edit task event invoked when clicked on edit task.
      taskEdit.addEventListener('click', ()=>{
        if (taskEdit.innerText.toLowerCase()=="edit task"){
          taskInputElement.removeAttribute("readonly");
          taskInputElement.focus();
          taskEdit.innerText = "Save Task"
        }else{
          taskInputElement.setAttribute("readonly", "readonly");
          taskEdit.innerText = "Edit Task";
        }
        
      });

      taskDelete.addEventListener('click', ()=>{
        listElement.removeChild(taskElement);
      });

//Edit date event invoked when clicked on edit date. 
      dateEdit.addEventListener('click', ()=>{
        if (dateEdit.innerText.toLowerCase()=="edit date"){
          dateInputElement.removeAttribute("readonly");
          dateInputElement.focus();
          dateEdit.innerText = "Save Date"
        }else{
          dateInputElement.setAttribute("readonly", "readonly");
          dateEdit.innerText = "Edit Date";
        }
        console.log(arrayall);
      });

      dateDelete.addEventListener('click', ()=>{
        listElement2.removeChild(dateElement);
      });

    arrayall.push(task0);
    arrayall.sort(function (a, b) {
      return a._date - b._date;
    });
    console.log(arrayall);
      
    });
  });
