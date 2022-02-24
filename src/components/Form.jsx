import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");

  return (
    <div>
      <form classname="todo-form">
          <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo.input"
          />
        <button className="todo-button">Add Todo</button>
      </form>
    </div>
  );
}
