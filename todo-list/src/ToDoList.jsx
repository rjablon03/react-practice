import { useState } from "react";

function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    };

    const addNewTask = () => {
        setTaskList([...taskList, newTask]);
        setNewTask("");
        document.querySelector(".create-task input").value = "";
    };

    const removeTask = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>

            <div className="create-task">
                <input type="text" placeholder="Enter a new task" onChange={handleNewTask}/>
                <button className="add-btn" onClick={addNewTask}>Add</button>
            </div>

            <div className="task-list">
                {taskList.map((task, index) => {
                    return (
                        <div key={index} className="task">
                            <p>{task}</p>
                            <button className="complete-btn" onClick={() => removeTask(index)}>Complete</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ToDoList;