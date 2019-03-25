import { createAction } from 'redux-actions';

export const onTaskValueChange = createAction('ON_TASK_VALUE_CHANGE');
export const onRemoveTask = createAction('ON_REMOVE_TASK');
export const onAddTask = createAction('ON_ADD_TASK');
export const onDoneTask = createAction('ON_DONE_TASK');