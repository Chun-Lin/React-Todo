import { combineReducers } from 'redux'
import todos from './reducerTodo'

const rootReducer = combineReducers({
  todos,
})

export default rootReducer
