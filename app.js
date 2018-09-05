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
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
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

  taskInput.value = '';

  e.preventDefault()
}

//remove task from ul
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove(); 
    }
  }
}

//clear all tasks from ul
function clearTasks() {
  taskList.innerHTML = '';
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