import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {task: ""};

function TodoForm({addTodo}) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({...formData, id: uuidv4()})
    setFormData(INITIAL_STATE);
  }

  const handleChange = (evt) =>{
    const{name, value} = evt.target;
    setFormData(currFormData => ({...currFormData,[name]: value}))
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input id="task" name="task" value={formData.task} onChange={handleChange}></input>
      <button>Add Todo</button>

    </form>
  )
}

export default TodoForm;