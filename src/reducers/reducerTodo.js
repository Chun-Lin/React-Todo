import { FETCH_TODO, ADD_TODO, DEL_TODO, MOD_TODO } from '../actions/index'

export default function(state = [], action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_TODO:
      // don't mutate origin state, return new array.
      return [action.payload.todos, ...state]
    // the same as state.concat([action.payload.data])
    case ADD_TODO:
      return [...state, action.payload ]

    case DEL_TODO:

    case MOD_TODO:
  }
  return state
}
