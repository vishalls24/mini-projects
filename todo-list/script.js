const inp = document.querySelector("input");
const add = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

// Add Task
function addTask() {
  const value = inp.value.trim();

  if (!value) return;

  const task = document.createElement("div");
  task.className = "taskList";

  task.innerHTML = `
    <h3>${value}</h3>
    <div class="btn">
      <button class="edit">Edit</button>
      <button class="completed">Complete</button>
      <button class="delete">Delete</button>
    </div>
  `;

  todoBox.appendChild(task);
  inp.value = "";
}

add.addEventListener("click", addTask);

inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

todoBox.addEventListener("click", (e) => {
  const task = e.target.closest(".taskList");

  if (!task) return;

  // Edit
  if (e.target.classList.contains("edit")) {
    const heading = task.querySelector("h3");

    const updated = prompt("Edit Task", heading.textContent);

    if (updated?.trim()) {
      heading.textContent = updated.trim();
    }
  }

  // Complete
  if (e.target.classList.contains("completed")) {
    task.classList.toggle("completed-task");

    e.target.textContent = task.classList.contains("completed-task")
      ? "Undo"
      : "Complete";
  }

  // Delete
  if (e.target.classList.contains("delete")) {
    task.remove();
  }
});
