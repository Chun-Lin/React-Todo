import { FETCH_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from '../actions/index'
import { handleDelete, handleEdit } from '../utils/index'
import store from '../store/store'
import axios from 'axios'
import { API_HOST } from '../constants/index'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return action.payload.data

    case ADD_TODO:
      axios.post(API_HOST, action.payload).catch(function(error) {
        console.log(error)
      })

      return [...state, action.payload]

    case DEL_TODO:
      axios.delete(`${API_HOST}/${action.payload.id}`).catch(function(error) {
        console.log(error)
      })

      const delTodos = handleDelete(action.payload.id, store.getState().todos)

      return delTodos

    case EDIT_TODO:
      axios
        .put(`${API_HOST}/${action.payload.id}`, {
          id: action.payload.id,
          todo_title: action.payload.todoTitle,
        })
        .catch(function(error) {
          console.log(error)
        })

      const editTodos = handleEdit(
        action.payload.id,
        store.getState().todos,
        action.payload.todoTitle,
      )

      return editTodos

    default:
      return state
  }
}
