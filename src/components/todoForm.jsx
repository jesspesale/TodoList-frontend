import React, { useState } from "react";
import { createTodo } from "../actions/createTodo";

export default function TodoForm() {
  const [input, setInput] = useState("");
  
     const handleChange = (e) => {
      setInput(e.target.value)
      // console.log(input)
     }

  const handleSubmit = (e) => {
      e.preventDefault();
  
      createTodo(input)
      setInput("")
  }


  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo.input"
          onChange={handleChange}
          />
        <button className="todo-button">Add Todo</button>
      </form>
    </div>
  );
}
