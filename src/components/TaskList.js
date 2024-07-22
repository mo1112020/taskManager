import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default TaskList;
