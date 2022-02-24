import './App.css';
import { Button } from 'antd';
// import TodoForm from "./components/TodoForm"
import { loadTodos } from './actions/loadTodos';

function App() {
  return (
    <div className="App">
      <h1>Hello from react </h1>
      <Button />
      <Button type="primary">Button</Button>
      {/* {loadTodos()} */}
      {/* <TodoForm></TodoForm> */}
    </div>
  );
}

export default App;

