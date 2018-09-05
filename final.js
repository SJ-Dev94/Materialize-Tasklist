const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 


loadEventListeners();

function loadEventListeners() { 

}

function addTask(e){

  //create li
  const li = document.createElement('li');
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));

  //create a
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  link.innerHTML('<i class="far fa-trash-alt"></i>');
  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = '';
  

}






















/*funtion loadEventListener(){
  form.addEventListener('submit', addTask);
}

function addTask(e){
  if (taskInput.value = ''){
    prompt('Add a task!');
    e.preventDefault(); 
  }
  
  const li = document.createElement('li');
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>'
  li.appendChild(link);

  taskList.appendChild(link);

  taskList.value = '';

}










/*function loadEventListeners() { 
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if (taskInput.value = '') {
   prompt("Add a task!")

   e.preventDefault();
  }

  //creating li
  const li = document.createElement('li');
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  //creating a tag
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHtml = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  
  //clearing li
  taskInput.value = '';



 
}

*/