export const handleEdit = (index, todos, todoTitle) => {
  const cloneTodos = [...todos]
  cloneTodos[index] = { todo_title: todoTitle }

  return cloneTodos
}