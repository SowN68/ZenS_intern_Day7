import { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { addNewTodo, completeTodo, filterTodo, removeTodo } from "../actions/todo"
import Footer from "../components/Footer/Footer"
import TodoForm from "../components/TodoForm/TodoForm"
import TodoList from "../components/TodoList/TodoList"
const HomePage = () => {
  const todos = useSelector(state => state.todo.todoList)
  const filterType = useSelector(state => state.todo.filter)
  const dispatch = useDispatch()
  const addTodoHandler = (value) => {
    const addAction = addNewTodo(value)
    dispatch(addAction)
  }
  const deleteTodoHandler = (id) => {
    const removeAction = removeTodo(id)
    dispatch(removeAction)
  }
  const completeTodoHandler = (id) => {
    const completeAction = completeTodo(id)
    dispatch(completeAction)
  }    
  const filter = (type) => {
      switch (type) {
      case "All":
        return todos
      case "Active":
        return todos.filter(item => !item.isDone)
      case "Complete":
        return todos.filter(item => item.isDone)
      default:
        return todos
    }
  }
  const filterTodoHandler = (type) => {
    const filterAction = filterTodo(type)
    console.log(filterTodo(type))
    dispatch(filterAction)
  }
  const todo = filter(filterType)
  const count = filter(filterType).length
  return (
    <>
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList todos={todo} onDeleteTodo={deleteTodoHandler} onCompleteTodo={completeTodoHandler} />
      <Footer count={count} onFilterTodo={filterTodoHandler} />
    </>
  )
}
export default HomePage