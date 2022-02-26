import React from 'react'
import "./todoItem.css"
// import {deleteTodo} from "../actions/deleteTodo"

export default function TodoItem({key, todo, completed}) {
  return (
    <div>
      <li id={key}>
        {todo}
        <button className="delete-button">X</button>
      </li>
    </div>
  );
}
