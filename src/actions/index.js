import axios from 'axios';
import { createAction } from 'redux-actions';

export const taskValueChange = createAction('ON_TASK_VALUE_CHANGE');
export const initSuccessListOfTask = createAction('INIT_LIST_OF_TASKS');
export const removeTask = createAction('ON_REMOVE_TASK');
export const addTask = createAction('ON_ADD_TASK');
export const updateTask = createAction('ON_UPDATE_TASK');

export const onSaveTask = ({ task }) => async dispatch => {
  const { data } = await axios.post('https://5c99023942365600143931e4.mockapi.io/api/v1/tasks', { task });
  dispatch(addTask({ task: data }));
};

export const onRemoveTask = ({ id }) => async dispatch => {
  const { data } = await axios.delete(`https://5c99023942365600143931e4.mockapi.io/api/v1/tasks/${id}`);
  dispatch(removeTask({ id: data.id }));
};

export const onUpdateTask = ({ id, state }) => async dispatch => {
  const { data } = await axios.put(`https://5c99023942365600143931e4.mockapi.io/api/v1/tasks/${id}`, { state });
  dispatch(updateTask({ task: data }));
};