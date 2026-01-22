import { useState } from "react";

const TodoNew = (props) => {
       const {addNewTodo} = props;

       // addNewTodo("Thang");
       const [valueInput, setValueInput] = useState("Thắng"); //Khởi tạo giá trị mặc dịnh cho state

       const handleClick = () => {
              console.log("check value input", valueInput);
       }
       const handleOnChange = (name) => {
              setValueInput(name)
       }
       return (
              <div className='todo-new'>
                     <input type="text" placeholder='Enter your task'
                     onChange={() => handleOnChange(event.target.value)}
                     />
                     <button style={{cursor: "pointer"}} 
                     onClick={handleClick}
                     >Add</button>
                     <div>My name is {valueInput}</div>
              </div>
       )
}
export default TodoNew