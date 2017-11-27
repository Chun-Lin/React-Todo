import { remove } from 'ramda'

export const handleDelete = (index, todos) => {
  const newTodos = remove(index, 1, todos)

  return newTodos
}
