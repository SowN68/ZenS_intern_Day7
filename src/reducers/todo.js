const initialState = {
  todoList: [],
  preTodoList : [],
  filter: "All"
}

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":{
      const newTodoList = [...state.todoList]
      newTodoList.push(action.payload)
      return {
        ...state,
        todoList: newTodoList
      }
    }
    case "DELETE_TODO": {
      const removeTodoList = state.todoList.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        todoList: removeTodoList
      }
    }
    case "COMPLETE_TODO": {
      const completeTodoList = state.todoList.map(todo => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      return {
        ...state,
        todoList: completeTodoList
      }
    }
    case "FILTER_TODO": {
      return {
        ...state,
        filter: action.payload
      }
    }
    default:
      return state
  }
}
export default reducerTodo