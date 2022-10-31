const addNewTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}
const removeTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    payload: id
  }
}
const filterTodo = (filterArr) => {
  return {
    type: 'FILTER_TODO',
    payload: filterArr
  }
}
export { addNewTodo, removeTodo, completeTodo, filterTodo }
