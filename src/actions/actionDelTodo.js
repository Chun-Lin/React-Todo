export const DEL_TODO = 'DEL_TODO'

export const delTodo = todo_title => ({ type: DEL_TODO, payload: todo_title })
