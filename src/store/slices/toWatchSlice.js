import { createSlice } from '@reduxjs/toolkit';
import moviesState from '../../model/initialMovies';
import { WATCH_SLICE_NAME } from '../../model/constants';

const initialState = {
	movies: moviesState,
	isFetching: false,
	error: null,
};

const toWatchSlice = createSlice({
	name: WATCH_SLICE_NAME,
	initialState,
	reducers: {
		createMovie(state, { payload }) {
			state.movies.push(payload);
		},
		removeMovie(state, { payload }) {
			state.movies = state.movies.filter((movie) => movie.id !== payload);
		},
		changeMovie(state, { payload }) {
			state.movies = state.movies.map((movie) =>
				movie.id === payload
					? { ...movie, isDone: !movie.isDone }
					: movie
			);
		},
	},
});

export const { createMovie, removeMovie, changeMovie } = toWatchSlice.actions;

export default toWatchSlice.reducer;
