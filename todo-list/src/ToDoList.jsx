import { useState } from "react";

function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    return (
        <div className="container">
            <h1>To-Do List</h1>

            <div className="create-task">
                <input type="text" placeholder="Enter a new task" />
                <button>Add</button>
            </div>

            <div className="task-list">
                <p>You have no tasks</p>
            </div>
        </div>
    );
}

export default ToDoList;