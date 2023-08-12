import { put } from 'redux-saga/effects';
import api from '../api/movie-service';
import {
	addMovieError,
	addMovieRequest,
	addMovieSuccess,
	deleteMovieError,
	deleteMovieRequest,
	deleteMovieSuccess,
	getMoviesError,
	getMoviesRequest,
	getMoviesSuccess,
	toggleMovieError,
	toggleMovieRequest,
	toggleMovieSuccess,
} from '../store/actions/actions';

export function* getMoviesSaga() {
	yield put(getMoviesRequest());
	try {
		const movies = yield api.get(`/`).then(({ data }) => data);
		yield put(getMoviesSuccess(movies));
	} catch (error) {
		yield put(getMoviesError(error));
	}
}
export function* createMovieSaga({ payload }) {
	yield put(addMovieRequest());
	try {
		const newMovie = yield api.post(`/`, payload).then(({ data }) => data);
		yield put(addMovieSuccess(newMovie));
	} catch (error) {
		yield put(addMovieError(error));
	}
}
export function* updateMovieSaga({ payload }) {
	yield put(toggleMovieRequest());
	try {
		const changedMovie = yield api
			.put(`/${payload.id}`, payload)
			.then(({ data }) => data);
		yield put(toggleMovieSuccess(changedMovie));
	} catch (error) {
		yield put(toggleMovieError(error));
	}
}
export function* deleteMovieSaga({ payload }) {
	yield put(deleteMovieRequest());
	try {
		yield api.delete(`/${payload}`);
		yield put(deleteMovieSuccess(payload));
	} catch (error) {
		yield put(deleteMovieError(error));
	}
}
