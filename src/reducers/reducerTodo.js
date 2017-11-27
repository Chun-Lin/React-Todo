import { FETCH_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from '../actions/index'
import { handleDelete, handleEdit } from '../utils/index'
import store from '../store/store'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return action.payload.data

    case ADD_TODO:
      return [...state, action.payload]

    case DEL_TODO:
      const delTodos = handleDelete(
        action.payload.selectedTodoKey,
        store.getState().todos,
      )

      return delTodos

    case EDIT_TODO:
      const editTodos = handleEdit(
        action.payload.selectedTodoKey,
        store.getState().todos,
        action.payload.todoTitle,
      )

      return editTodos

    default:
      return state
  }
}
