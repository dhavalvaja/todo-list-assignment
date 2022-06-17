import React from "react";
import "./App.css";

export default function Todo({ todo, deleteTodo }) {
  return (
    <div className="todo">
      <p className="task">{todo.task}</p>
      
      <span
        onClick={() => {
          deleteTodo(todo);
        }}
        className="status"
      >
        ✔
      </span>
      
    </div>
  );
}
