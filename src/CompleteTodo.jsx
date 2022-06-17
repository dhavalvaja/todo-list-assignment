import React from "react";
import "./App.css";

export default function Todo({ todo }) {
  return (
    <div className="todo completed">
      <p className="task">{todo.task}</p>
    </div>
  );
}
