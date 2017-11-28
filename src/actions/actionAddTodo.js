export const ADD_TODO = 'ADD_TODO'

export const addTodo = (id, todoTitle) => {
  const addID = (parseInt(id, 10)+1).toString()
  const todo_titleJson = { id: addID, todo_title: todoTitle }

  return {
    type: ADD_TODO,
    payload: todo_titleJson,
  }
}
