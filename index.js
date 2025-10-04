function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  taskInfo.appendChild(span);

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✅";
  completeBtn.title = "Mark as Done";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
