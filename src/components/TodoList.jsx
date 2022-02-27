import React, {useEffect} from 'react'
import TodoItem from './todo-item/TodoItem';
// import { loadTodos } from '../actions/loadTodos'

export default function TodoList({todos, setTodos}) {

    useEffect(() => {
        fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then(todos => setTodos(todos))
    }, [])


  return (
    <div>
        <div>Things you have to do: </div>
        {todos.map((todo) => {
            return(
                <div key={todo.id}>
                    <TodoItem 
                        todo={todo.title}
                        id={todo.id}
                        completed={todo.completed}
                    />
                </div>
            )
        })}
    </div>
  );
}
