const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

empty = "Todo cannot be empty";
inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") {
    return;
  } else if (inputAdd.value === "") {
    alert("Todo cannot be empty");
  }
  //your code here
  else addTodo(inputAdd.value, false);
};

function addTodo(title, completed) {
  //create a div that holds todo title, done button, delete button
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";

  //create span for showing title
  const span = document.createElement("span");
  span.innerText = title;
  span.style.textDecoration = completed ? "line-through" : "";
  span.className = "me-3";

  //create done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "btn btn-success me-2";

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger";

  div.appendChild(span);
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);
  todoCtn.appendChild(div);
  div.onmouseover;

  doneBtn.onclick = () => {
    if (span.style.textDecoration !== "line-through") {
      span.style.textDecoration = "line-through";
      // const data = JSON.parse(localStorage.getItem("todo-container"));
    } else span.style.textDecoration = "";
  };
  deleteBtn.onclick = () => {
    div.remove();
  };
  //your code here
  //append todo to HTML...
  //define buttons event...
}

function saveTodo() {
  const data = [];
  for (const todoDiv of todoCtn.children) {
    //your code here
  }
  //your code here
}

function loadTodo() {
  //your code here
}

loadTodo();