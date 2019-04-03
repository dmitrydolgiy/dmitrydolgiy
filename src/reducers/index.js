import { combineReducers } from 'redux';
import formReducer from './formReducer';
import { listOfTasks, currentTaskValue, activeStateButton } from './toDoList';

export default combineReducers({
  form: formReducer,
  listOfTasks,
  currentTaskValue,
  activeStateButton,
});
