import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';


const AddTask = ({ addTask }) => {
  const [value, updateValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value == "") {
      alert("please enter task");
    } else {
      if (value != null) {
        addTask(value);
      }
      updateValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Enter your task todo" onChange={e => updateValue(e.target.value)}
      />
      <button type="submit"><i className="material-icons">add</i></button>
    </form>
  );
};
const TodoList = () => {
  const addTask = text => updateTask([...tasks, { text }]);
  const [tasks, updateTask] = useState([
    {
      text: "wake up",
      isCompleted: false,
    },
    {
      text: "exercise",
      isCompleted: false,
    },
    {
      text: "breakfast",
      isCompleted: false,
    }
  ])
  const toogleTask = (index) => {
    const newTask = [...tasks];
    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;
    }
    else {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);
  }
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    updateTask(newTask);
  }
  return (
    <div className="list-of-tasks-todo">
      {tasks.map((task, index) => (
        <div className="task-status" key={index}>
          <span onClick={() => toogleTask(index)} className={task.isCompleted ? "task-name completed-task" : "task-name"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><i className="material-icons">delete</i></button>
        </div>
      )
      )}
      <AddTask addTask={addTask} />
    </div>
  );
}
ReactDom.render(<TodoList />, document.getElementById("root"));