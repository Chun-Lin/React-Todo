export const EDIT_TODO = 'EDIT_TODO'

export const editTodo = (id, todoTitle) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      todoTitle,
    },
  }
}
