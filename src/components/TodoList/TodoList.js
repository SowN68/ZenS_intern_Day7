import Card from "../../UI/Card"
import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.css"
const TodoList = ({ todos, onDeleteTodo, onCompleteTodo }) => {
  return (
    <Card>
      <div className="todo-list-container">
        {
          todos.length === 0 ? (
            <h3 className="no-tasks-nofication">No task here</h3>
          ) :
          (todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} />
          )))
      }
      </div>
    </Card>
  )
}
export default TodoList