import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
