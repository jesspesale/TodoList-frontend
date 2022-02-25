import './App.css';
import { Button } from 'antd';
import TodoForm from "./components/TodoForm"
import TodoList from './components/TodoList';
import React, {useState} from "react"
{/* <Button type="primary">Button</Button> */}

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <TodoList todos={todos} setTodos={setTodos}/>
      <br></br>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;

