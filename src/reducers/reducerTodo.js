import { FETCH_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODO:
      return action.payload.data

    case ADD_TODO:
      console.log(`state: ${state}`)
      return [...state, action.payload]

    case DEL_TODO:
      return action.payload

    case EDIT_TODO:
      return action.payload

    default:
      return state
  }
}
