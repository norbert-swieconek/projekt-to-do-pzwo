const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

btn.addEventListener("click", addTask);

function addTask() {
    if(input.value === "") return;
    createElement(input.value);
    saveTask(input.value);
    input.value = "";
}

function createElement(text) {
    const li = document.createElement("li");
    li.innerText = text;
    
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });
    
    const delBtn = document.createElement("span");
    delBtn.innerHTML = " \u00D7"; // Znak X
    delBtn.style.color = "red";
    delBtn.style.marginLeft = "10px";
    delBtn.style.cursor = "pointer";
    
    delBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        removeTask(text);
    };
    
    li.appendChild(delBtn);
    list.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => createElement(task));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}