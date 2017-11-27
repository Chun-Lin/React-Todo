export const ADD_TODO = 'ADD_TODO'


export const addTodo = todo_title => {
  
  const todo_titleJson = {todo_title: todo_title}
  
  return {
  type: ADD_TODO,
  payload: todo_titleJson
}
}
