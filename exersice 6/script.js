let input = document.querySelector('.task-add input'); // Fix: use querySelector instead of getElementById for class
let addbtn = document.querySelector(".task-add button");
const container = document.querySelector('.container');

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-list");
container.appendChild(taskContainer);

// Run when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

addbtn.addEventListener("click", () => {
    let taskText = input.value.trim();
    if (taskText === "") {
        alert("Enter the text");
        return;
    }

    let task = {
        id: Date.now(),
        text: taskText
    };

    let tasks = getTasks(); // Fixed name: getTasks not gettask
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Fix: used getItem instead of setItem
    input.value = "";
    displayTasks(); // Fixed name: displayTasks not displayinput
});

function getTasks() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    displayTasks(); // Fixed name: displayTasks not displaytasks
}

function displayTasks() {
    const tasks = getTasks();
    taskContainer.innerHTML = "";

    tasks.forEach(task => { // Fix: task.array.forEach was invalid
        const div = document.createElement("div");
        div.classList.add("task-1");

        let p = document.createElement("p");
        p.innerHTML = `${task.text}`;

        let viewBtn = document.createElement("button"); // Fix: viewBtn was not declared
        viewBtn.textContent = "View"; // Fix: textContent was misspelled
        viewBtn.id = "view";
        viewBtn.addEventListener("click", () => {
            alert(`Task: ${task.text}`);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = 'delete'; // lowercase for consistency
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id); // Fix: called the correct delete function
        });

        div.appendChild(p);
        div.appendChild(viewBtn);
        div.appendChild(deleteBtn);
        taskContainer.appendChild(div);
    });
}

function deleteTask(id) { // Fix: function name was deleteid instead of deleteTask
    let tasks = getTasks(); // Fix: gettask to getTasks
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); // Fix: capitalized
}
