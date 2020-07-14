import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const addTodo = (data) => dispatch({ type: "ADD", payload: data });
  const removeTodo = (id) => dispatch({ type: "REMOVE", payload: id });

  return (
    <div className="TodoList">
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <Todo {...t} removeTodo={removeTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;