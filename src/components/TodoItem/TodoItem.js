import blacktick from "../../assets/black-tick.svg"
import greentick from "../../assets/green-tick.svg"
import deleteBtn from "../../assets/delete.svg"
import "./TodoItem.css"
const TodoItem = ({ todo, onDeleteTodo, onCompleteTodo }) => {
  return (
    <div className="todoItemBlock">
      <div className="todoitem-content" onClick={() => onCompleteTodo(todo.id)}>
        <img src={blacktick} alt="Black tick"
          className={todo.isDone ? "tick isTick" : "tick"}
        />
        <img src={greentick} alt="Black tick"
          className={!todo.isDone ? "tick isTick" : "tick"}
        />
        <li
          className={todo.isDone ? "todoitem-content complete" : "todoitem-content"}
        >
          {todo.todo}
        </li> 
      </div>
      <span >
          <img src={deleteBtn} alt="Delete button" className="btn-delete" onClick={() => onDeleteTodo(todo.id)} />
        </span>
    </div>
  )
}
export default TodoItem;