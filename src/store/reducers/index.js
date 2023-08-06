import { combineReducers } from 'redux';

import toWatchReducer from './toWatchReducer';
import contactReducer from './contactReducer';


export default combineReducers({
	contactsList: contactReducer,
	moviesList: toWatchReducer,
});