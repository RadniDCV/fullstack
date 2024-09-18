import React from "react";

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default Todo;
