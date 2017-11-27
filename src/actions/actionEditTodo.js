export const EDIT_TODO = 'EDIT_TODO'

export const editTodo = (selectedTodoKey, todoTitle) => {
  return {
    type: EDIT_TODO,
    payload: {
      selectedTodoKey,
      todoTitle,
    },
  }
}
