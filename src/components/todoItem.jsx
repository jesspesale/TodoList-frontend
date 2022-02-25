import React from 'react'

export default function TodoItem({key, todo, completed}) {
  return (
    <div>
      <li id={key}>
        {todo}
        <button>X</button>
      </li>
    </div>
  );
}
