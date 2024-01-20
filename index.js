const taskList = document.querySelector(".taskList");
const form = document.getElementById("addForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskInput = form.querySelector("#inputTaskField");
  const list = document.createElement("div");
  list.classList.add("task");
  list.innerHTML = taskInput.value;
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = `<img class="closeBtn" src="close.png"/>`;

  list.appendChild(removeBtn);
  taskList.appendChild(list);
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName == "BUTTON") {
    const targetList = this.querySelector(".task");
    targetList.remove();
  }
});
