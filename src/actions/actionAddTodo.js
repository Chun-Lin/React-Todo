export const ADD_TODO = 'ADD_TODO'

export const addTodo = ( todo_title) => ({
  type: ADD_TODO,
  payload: { todo_title: todo_title },
})
