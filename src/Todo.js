import React from "react";

function Todo({ id, task, removeTodo}) {
  const deleteTodo = () => {
    removeTodo(id);
  }

  return (
    <div>
      <li key={id}>{task} <button onClick ={deleteTodo}>Remove</button></li>
      
    </div>
  )
}
export default Todo;