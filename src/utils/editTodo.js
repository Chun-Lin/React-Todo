import { propEq, findIndex } from 'ramda'

export const handleEdit = (id, todos, todoTitle) => {
  const cloneTodos = [...todos]
  const editID = id.toString()
  const index = findIndex(propEq('id', editID))(cloneTodos)
  console.log(`todoTitle: ${todoTitle}`)
  cloneTodos[index] = { id: editID, todo_title: todoTitle }

  console.log(cloneTodos)
  // cloneTodos[id] = { id: editID, todo_title: todoTitle }

  return cloneTodos
}
