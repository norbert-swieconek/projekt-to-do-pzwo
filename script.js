const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

btn.addEventListener("click", () => {
    if(input.value === "") return;
    const li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    input.value = "";
});