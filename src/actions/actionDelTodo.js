export const DEL_TODO = 'DEL_TODO'

export const delTodo = selectedTodoKey => {
  return {
    type: DEL_TODO,
    payload: { selectedTodoKey },
  }
}
