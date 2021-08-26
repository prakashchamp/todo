import React from "react";

import { Todo } from "../models/models.todo";

export const TodoItem: React.FC<Todo> = (props) => {
  const todo = props;

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onClick={() => (todo.isCompleted = !todo.isCompleted)}
      />
      {todo.task}
    </li>
  );
};
