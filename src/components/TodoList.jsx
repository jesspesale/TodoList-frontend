import React, {useState, useEffect} from 'react'
// import { loadTodos } from '../actions/loadTodos'

export default function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then(todos => setTodos(todos))
    }, [])


  return (
    <div>
        <div>Things you have to do: </div>
        {console.log(todos)}
        {todos.map((todo) => {
            return(
                <li>
                    {todo.title}
                </li>
            )
        })}
    </div>
  );
}
