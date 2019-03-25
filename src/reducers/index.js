import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { onTaskValueChange, onRemoveTask, onAddTask, onDoneTask, initSuccessListOfTask } from '../actions';

const currentTaskValue = handleActions({
  [onTaskValueChange]: (state, { payload: { value } }) => value,
  [onAddTask]: () => '',
}, '');

const activeStateButton = handleActions({
  [onTaskValueChange]: (state, { payload: { value } }) => !Boolean(value),
  [onAddTask]: () => true,
}, true);

const listOfTasks = handleActions({
  [initSuccessListOfTask]: (state, { payload: { tasks } }) => tasks,

  [onRemoveTask]: (state, { payload: { id } }) =>
    state.filter(task => task.id !== id),

  [onDoneTask]: (state, { payload: { id } }) =>
    state.map(task => task.id === id
      ? { ...task, state: !task.state }
      : task),

  [onAddTask]: (state, { payload: { task } }) => [...state, {
    task,
    state: false,
    id: Math.round(Math.random() * 100)
  }],
}, []);

export default combineReducers({
  listOfTasks,
  currentTaskValue,
  activeStateButton,
});
