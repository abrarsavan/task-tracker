// app.js
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        if (task.done) li.classList.add("done");

        li.innerHTML =
            '<span>' + task.text + '</span>' +
            '<div>' +
            '  <button onclick="toggleTask(' + index + ')">✅</button>' +
            '  <button onclick="deleteTask(' + index + ')">❌</button>' +
            '</div>';

        taskList.appendChild(li);
    });
    document.getElementById("counter").textContent = tasks.length + " task(s)";
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    tasks.push({ text: text, done: false });
    taskInput.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});

document.getElementById("clearBtn").addEventListener("click", function () {
    tasks.length = 0;
    renderTasks();
});
