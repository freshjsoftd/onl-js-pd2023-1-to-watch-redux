import { createStore } from 'redux';
import toWatchReducer from './reducers/toWatchReducer';

export default createStore(toWatchReducer);