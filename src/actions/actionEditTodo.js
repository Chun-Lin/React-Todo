export const EDIT_TODO = 'EDIT_TODO'

const handleEdit = (index, todos, todoTitle) => {
  const cloneTodos = [...todos]
  cloneTodos[index] = { todo_title: todoTitle }

  return cloneTodos
}

export const editTodo = (selectedTodoKey, todos, todoTitle) => {
  const newTodos = handleEdit(selectedTodoKey, todos, todoTitle)

  return {
    type: EDIT_TODO,
    payload: newTodos,
  }
}
