
const TodoData = (props) => {
       const {name, age, hometown} = props;
       console.log(props)
       return(
              <div className="todo-data">
                     <div>Tôi tên là {name} và tôi {age} tuổi, quê quán của tôi là xã {hometown.commune}, tỉnh {hometown.province}</div>
                     <div>Learning react</div>
                     <div>Watching Youtube</div>
                     <div>
                            {JSON.stringify(props.todoList)}
                     </div>
              </div>
       )
}
export default TodoData