import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../store/actions/actionTypes';
import {
	createMovieSaga,
	deleteMovieSaga,
	getMoviesSaga,
	updateMovieSaga,
} from './toWatchSagas';

function* rootSaga() {
	yield takeLatest(ACTION_TYPES.GET_MOVIES_ACTION, getMoviesSaga);
	yield takeLatest(ACTION_TYPES.POST_MOVIE_ACTION, createMovieSaga);
	yield takeLatest(ACTION_TYPES.PUT_MOVIE_ACTION, updateMovieSaga);
	yield takeLatest(ACTION_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga);
}

export default rootSaga;
