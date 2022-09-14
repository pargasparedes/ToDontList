window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
// stops from page refresh when submitting
    form.addEventListener('submit', (e) =>{
        // e.preventDefault();

        const task = input.value;
    // alerts if no task is entered but add task is selected
        if (!task) {
            alert("Please submit task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");
// sets value equal to task to add new tasks
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
     

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

// changing inner HTML to edit/delete buttons to new additions
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        // task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value = "";
// making the edit and delete buttons work removing readonly to edit text
// changes the edit button to the save button for new tasks
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
        // gets delete button to work
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

    })
})