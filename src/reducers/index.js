import { combineReducers } from 'redux';
import todos from './reducerTodo';

const rootReducer = combineReducers({
  todos: todos
});

export default rootReducer;
