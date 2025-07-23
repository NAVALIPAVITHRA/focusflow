const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
});

// Add new task
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task === '') return;

  addTaskToDOM(task);
  saveToLocalStorage(task);
  taskInput.value = '';
});

// Add task to DOM
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.onclick = () => deleteTask(li, task);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save task to localStorage
function saveToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task
function deleteTask(li, task) {
  li.remove();
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
