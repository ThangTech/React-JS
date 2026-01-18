import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'

const App = () => {
  return (
  <>
       <div className="todo-container">
              <div className="todo-title"><h1>Todo list</h1></div>
              <TodoNew></TodoNew>
              <TodoData></TodoData>
              <div className='todo-image'>
                     <img src={reactLogo} className='logo' alt="react" />
              </div>
       </div>
  
  </>
)};

export default App;
