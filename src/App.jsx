import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {
       const [todoList, setTodoList] = useState([
              {id: 1, name: "Learning React"},
              {id: 2, name: "Learning TypeScript"}
       ])
       const name = "Nguyen Quoc Viet";
       const age = 20;
       const hometown = {
              commune: "An Tao",
              province: "Hung Yen"
       }
       const addNewTodo = (name) => {
              alert(`Hello ${name}`);
       }
  return (
  <>
       <div className="todo-container">
              <div className="todo-title"><h1>Todo list</h1></div>
              <TodoNew 
              addNewTodo={addNewTodo}/>
              <TodoData 
              name={name}
              age={age}
              hometown={hometown}
              todoList={todoList}       
              />
              <div className='todo-image'>
                     <img src={reactLogo} className='logo' alt="react" />
              </div>
       </div>
  
  </>
)};

export default App;
