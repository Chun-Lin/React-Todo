import { remove } from 'ramda'

export const DEL_TODO = 'DEL_TODO'

const handleDelete = (index, todos) => {
  const newTodos = remove(index, 1, todos)

  return newTodos
}

export const delTodo = (selectedTodoKey, todos) => {
  const newTodos = handleDelete(selectedTodoKey, todos)
  return {
    type: DEL_TODO,
    payload: newTodos,
  }
}
