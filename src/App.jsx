import './App.css';
import { Button } from 'antd';
import TodoForm from "./components/TodoForm"
import TodoList from './components/TodoList';
import React, {useState} from "react"
// import {loadTodos} from "./actions/todoService"

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* <Button type="primary">Button</Button> */}
      <br></br>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;

