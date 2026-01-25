import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const App = () => {
  const randomIntInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [todoList, setTodoList] = useState([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "Learning TypeScript"}
  ]);
  // const name = "Nguyen Quoc Viet";
  // const age = 20;
  // const hometown = {
  //        commune: "An Tao",
  //        province: "Hung Yen"
  // }
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntInterval(3, 20),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const deleteTodo = (id) => {
       const newTodo = todoList.filter(x => x.id !== id);
       setTodoList(newTodo);
  }
  return (
    <>
    <Header/>
      <div className="todo-container">
        <div className="todo-title">
          <h1>Todo list</h1>
        </div>
        <TodoNew addNewTodo={addNewTodo} />

        {/* {todoList.length > 0 && (
          <TodoData
            // name={name}
            // age={age}
            // hometown={hometown}
            todoList={todoList}
          />
        )}
        {todoList.length === 0 && (
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="react" />
          </div>
        )} */}

        {todoList.length > 0 ? 
        (
          <TodoData todoList={todoList} deleteTodo={deleteTodo}/>
        ) 
        : 
        (
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="react" />
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default App;
