import React, {useState, useEffect} from 'react'
// import { loadTodos } from '../actions/loadTodos'

export default function TodoList({todos, setTodos}) {

    

    useEffect(() => {
        fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then(todos => setTodos(todos))
    }, [todos])


  return (
    <div>
        <div>Things you have to do: </div>
        {todos.map((todo) => {
            return(
                <li key={todo.id} className="todo-list">
                    {todo.title}
                </li>
            )
        })}
    </div>
  );
}
