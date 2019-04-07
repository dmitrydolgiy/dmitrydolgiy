import { combineReducers } from 'redux';
import { auth } from './auth';
import formReducer from './formReducer';
import { listOfTasks, currentTaskValue, activeStateButton } from './toDoList';

export default combineReducers({
  auth,
  listOfTasks,
  form: formReducer,
  currentTaskValue,
  activeStateButton,
});
