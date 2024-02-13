const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = document.getElementById("task-date").value;
  const time = document.getElementById("task-time").value;
  const details = document.getElementById("task-lists").value;

  const task = document.createElement("div");
  task.className = "task";

  const taskContent = document.createElement("span");
  taskContent.innerHTML = `Date: ${date}<br>Time: ${time}<br>Details: ${details}`;

  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(taskContent);
  task.appendChild(deleteBtn);

  taskList.appendChild(task);

  document.getElementById("task-date").value = "";
  document.getElementById("task-time").value = "";
  document.getElementById("task-lists").value = "";
});
