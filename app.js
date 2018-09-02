//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 

//Load all Event Listeners

loadEventListeners();

function loadEventListeners(){
  //add task event
  form.addEventListener('submit', addTask);
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
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to the li
  li.appendChild(link);
  
  //append li to ul
  taskList.appendChild(li);

  taskInput.value = '';

  e.preventDefault()
}