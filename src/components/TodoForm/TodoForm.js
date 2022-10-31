import { useState } from "react"
import Card from "../../UI/Card"
import "./TodoForm.css"
const TodoForm = (props) => {

  const [input, setInput] = useState("")
  const changeTodoHandler = (e) => {
    setInput(e.target.value)
  }
  const submitTodo = (e) => {
    e.preventDefault();
    props.onAddTodo({
      id: Math.floor(Math.random() * 1000),
      todo: input,
      isDone: false
    })
    setInput('')
  }
  return (
    <Card>
      <form onSubmit={submitTodo}>
        <input placeholder="What need to be done?" onChange={changeTodoHandler} value={input} />
      </form>
    </Card>
  )
}
export default TodoForm