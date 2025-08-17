let taskList = [];

window.onload = function () {
  if (localStorage.getItem("tasks")) {
    taskList = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
  }
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task !== "") {
    taskList.push(task);
    input.value = "";
    saveAndRender();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  taskList.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}
