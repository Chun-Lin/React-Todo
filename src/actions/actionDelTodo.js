export const DEL_TODO = 'DEL_TODO'

export const delTodo = delID => {
  return {
    type: DEL_TODO,
    payload: { id: delID },
  }
}
