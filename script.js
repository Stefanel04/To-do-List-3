document.addEventListener("DOMContentLoaded", function() {
    function addTask() {
        var taskInput = document.getElementById("newTask");
        var taskList = document.getElementById("taskList");

        if (taskInput.value.trim() !== "") {
            var li = document.createElement("li");
            li.classList.add("task-item");

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            li.appendChild(checkbox);

            var taskText = document.createElement("span");
            taskText.classList.add("task-text");
            taskText.appendChild(document.createTextNode(taskInput.value));
            li.appendChild(taskText);

            var deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.appendChild(document.createTextNode("Delete"));
            deleteButton.onclick = function () {
                li.remove();
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = "";

            // Adaugă eveniment pentru bifarea elementului
            checkbox.addEventListener("change", function() {
                li.classList.toggle("completed", checkbox.checked);
            });
        }
    }

    document.getElementById("newTask").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    document.getElementById("addTaskButton").addEventListener("click", addTask);
});
