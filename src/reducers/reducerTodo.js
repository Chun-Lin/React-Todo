import { FETCH_TODO, ADD_TODO, DEL_TODO, EDIT_TODO } from '../actions/index'

export default function(state = [], action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_TODO:
      // don't mutate origin state, return new array.
      return action.payload.data
    // the same as state.concat([action.payload.data])
    case ADD_TODO:
      console.log(`state: ${state}`)
      return [...state, action.payload]

    case DEL_TODO:
      return action.payload

    case EDIT_TODO:
      return action.payload
  }
  return state
}
