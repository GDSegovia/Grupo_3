import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css"

const TaskList = ({ tasks, onMarkAsUtil, onDelete }) => {
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onMarkAsUtil={onMarkAsUtil}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

