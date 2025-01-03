import { useState } from "react";

function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    }

    const addNewTask = () => {
        if (taskList.length === 0) {
            document.querySelector(".default-message").style.display = "none";
        }

        setTaskList([...taskList, newTask]);
        setNewTask("");
        document.querySelector(".create-task input").value = "";
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>

            <div className="create-task">
                <input type="text" placeholder="Enter a new task" onChange={handleNewTask}/>
                <button onClick={addNewTask}>Add</button>
            </div>

            <div className="task-list">
                <p className="default-message">You have no tasks</p>
                {taskList.map((task, index) => {
                    return (
                        <div key={index} className="task">
                            <input type="checkbox"/>
                            <span>{task}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ToDoList;