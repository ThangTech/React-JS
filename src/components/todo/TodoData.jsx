
const TodoData = (props) => {
  const { todoList, deleteTodo } = props;
  console.log(props);
  const handleClick = (id) => {
       deleteTodo(id)
  }
    return (
    <div className="todo-data">
      {todoList.map((todo) => {
        return (
          <div className={`todo-item`} key={todo.id}>
            <div>{todo.name}</div>
            <button style={{cursor: "pointer"}} onClick={() => handleClick(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
