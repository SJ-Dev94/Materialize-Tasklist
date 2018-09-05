//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 

//Load all Event Listeners

loadEventListeners();
 
function loadEventListeners(){
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //Remove tasks
  taskList.addEventListener('click', removeTask);
  //Clear all tasks
  clearBtn.addEventListener('click', clearTasks);
  //Filter
  filter.addEventListener('keyup', filterTasks);
}
 
//Get tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task){
    //Create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element 
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //Add icon Html
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    //append the link to the li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
  });
}
function addTask(e) {
  if (taskInput.value === ''){ 
    alert('Add a Task'); 
  }
  //Create li element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element 
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //Add icon Html
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  //append the link to the li
  li.appendChild(link);
  
  //append li to ul
  taskList.appendChild(li);
  
  //store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = '';

  e.preventDefault()
}

//Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
      tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task from ul
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

      //remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 
//clear all tasks from ul
function clearTasks() {
  taskList.innerHTML = '';

  clearTasksFromLocalStorage();
}
 
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    };
  });
}