import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { increment, decrement } from '../actions';

const counter = handleActions({
    [increment]: (state, { payload: { increase } }) => state + increase,
    [decrement]: (state, { payload: { decrease } }) => state - decrease,
}, 0);

export default combineReducers({
    counter,
})