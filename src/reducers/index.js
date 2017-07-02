import chat from './chat-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  chat
});

export default rootReducer;