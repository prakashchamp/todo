import React from "react";
import { TodoItem } from "../components/todoItem";
import { Todo } from "../models/models.todo";

export const TodoList = () => {
  const [todoList, settodoList] = React.useState<Todo[]>([]);
  const [todo, settodo] = React.useState<Todo>();

  const handleAddTodo = () => {
    // if (todo === "") {
    //   return;
    // }
    // const todoObject = {
    //   id: todoList.length + 1,
    //   task: todo,
    //   isCompleted: true,
    // };
    // settodoList([...todoList, todoObject]);
    // settodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => settodo(event.target.value)}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          event.keyCode === 13 && handleAddTodo();
        }}
      />
      <button onClick={() => handleAddTodo()}>Add</button>
      <ul>
        {todoList.map((item) => (
          <TodoItem todo={item} />
        ))}
      </ul>
    </div>
  );
};
