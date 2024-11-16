function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(listItem);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (!taskName) return;
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    loadTasks();
  }
  
  function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  document.addEventListener('DOMContentLoaded', loadTasks);
  