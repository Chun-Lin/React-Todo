import { propEq, reject } from 'ramda'

export const handleDelete = (id, todos) => {
  const equalID = propEq('id', id) // find identical id in every objects
  const newTodos = reject(equalID, todos) // return the object array without the object that contains the id

  return newTodos
}
