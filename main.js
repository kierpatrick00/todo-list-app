document.addEventListener("DOMContentLoaded", function () {
    let add = document.getElementById("add");
    let enterTask = document.getElementById("entertask");
    let tasks = document.getElementById("tasks");

    add.addEventListener("click", addButton);

    function addButton() {
        if (enterTask.value.length == 0) {
            alert("Please enter a task");
        } else {
            tasks.innerHTML += `
                <div id="task">
                    <span id="taskcontent">
                        ${enterTask.value}
                    </span>
                    <div class="edit-delete-container">
                        <button class="edittask">&#9998;</button>
                        <button class="deletetask"><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            `;

            let deleteTasks = document.getElementsByClassName('deletetask');
            let editTasks = document.getElementsByClassName('edittask');

            for (let i = 0; i < deleteTasks.length; i++) {
                deleteTasks[i].onclick = function () {
                    this.parentNode.parentNode.remove();
                };
            }

            for (let i = 0; i < editTasks.length; i++) {
                editTasks[i].onclick = function () {
                    let newTaskContent = prompt("Edit task:", this.parentNode.parentNode.querySelector('#taskcontent').innerText);
                    if (newTaskContent !== null) {
                        this.parentNode.parentNode.querySelector('#taskcontent').innerText = newTaskContent;
                    }
                };
            }
        }

        clearData();
    }

    function clearData() {
        enterTask.value = '';
    }
});
