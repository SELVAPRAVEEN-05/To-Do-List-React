import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        } else {
            alert('Enter The Task');
        }
    };

    const deleteTask = index => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={taskInput}
                onChange={e => setTaskInput(e.target.value)}
                placeholder="Enter Task..."
            />
            <button className='buttonn' onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
