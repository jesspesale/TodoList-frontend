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
        {/* {loadTodos.map(todo => {
            console.log(todo)
        })} */}
        {console.log(todos)}
        <div>TodoList</div>
    </div>
  );
}
