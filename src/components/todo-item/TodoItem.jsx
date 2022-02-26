import React from 'react'
import "./todoItem.css"
import {deleteTodo} from "../../actions/deleteTodo"

export default function TodoItem({id, todo, completed}) {

  const handleDelete = (id) => {
    console.log(id)
    deleteTodo(id)
  }

  return (
    <div>
      <li>
        {todo}
        <button  
        onClick={() => handleDelete(id)} 
        className="delete-button">X</button>
      </li>
    </div>
  );
}
