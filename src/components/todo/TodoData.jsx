
const TodoData = (props) => {
  const { todoList } = props;
  console.log(props);
  return (
    <div className="todo-data">
      {todoList.map((todo) => {
        return (
          <div className={`todo-item`} key={todo.id}>
            <div>{todo.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
