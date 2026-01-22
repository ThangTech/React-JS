import { useState } from "react";

const TodoNew = (props) => {
       const {addNewTodo} = props;

       // addNewTodo("Thang");
       const [valueInput, setValueInput] = useState("Thắng"); //Khởi tạo giá trị mặc dịnh cho state

       const handleClick = () => {
              addNewTodo(valueInput);
              setValueInput(""); //xét giá trị bằng rỗng
       }
       const handleOnChange = (name) => {
              setValueInput(name)
       }
       return (
              <div className='todo-new'>
                     <input type="text" placeholder='Enter your task'
                     onChange={() => handleOnChange(event.target.value)}
                     value={valueInput}
                     />
                     <button style={{cursor: "pointer"}} 
                     onClick={handleClick}
                     >Add</button>
                     <div>My name is {valueInput}</div>
              </div>
       )
}
export default TodoNew