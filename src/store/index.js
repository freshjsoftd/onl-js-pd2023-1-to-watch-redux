import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import toWatchReducer from './slices/toWatchSlice';


export default configureStore({
	reducer: {
		moviesList: toWatchReducer,
	},
});
