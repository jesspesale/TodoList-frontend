import './App.css';
import { Button } from 'antd';
import TodoForm from "./components/TodoForm"
// import {loadTodos} from "./actions/todoService"

function App() {

  return (
    <div className="App">
      <h1>Hello from react </h1>
      <Button type="primary">Button</Button>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;

