export const EDIT_TODO = 'EDIT_TODO'

const handleEdit = (index, todos, todoTitle) => {
  // todos[index] = todoTitle;
  const cloneTodos = [...todos]
  cloneTodos[index] = todoTitle

  return cloneTodos
}

export const editTodo = (selectedTodoKey, todos, todoTitle) => {
  const newTodos = handleEdit(selectedTodoKey, todos, todoTitle)

  return {
    type: EDIT_TODO,
    payload: newTodos,
  } 
}
