import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moviesState from '../../model/initialMovies';
import api from '../../api/movie-service';
import { WATCH_SLICE_NAME } from '../../model/constants';

const initialState = {
	movies: moviesState,
	isFetching: false,
	error: null,
};

export const getMovies = createAsyncThunk(
	`${WATCH_SLICE_NAME}/getMovies`,
	async function (_, { rejectWithValue }) {
		try {
			const response = await api.get('/');
			console.log(response);
			if (response.status >= 400) {
				throw new Error(`Server error: ${response.status}`);
			}
			const { data } = response;
			console.log(data);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addMovie = createAsyncThunk(
	`${WATCH_SLICE_NAME}/addMovie`,
	async function (newMovie, { rejectWithValue }) {
		try {
			const { data, statusText } = await api.post('/', newMovie);
			console.log(statusText);
			if (statusText !== 'Ok') {
				throw new Error(`Server error`);
			}
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const toogleMovie = createAsyncThunk(
  `${WATCH_SLICE_NAME}/toogleMovie`,
  async function(id, { rejectWithValue, dispatch, getState }){
    const movie = getState().moviesList
                  .movies.find(movie => movie.id === id);
    try {
      const { status } = await api.patch(`/${id}`, {isDone: !movie.isDone});
      if(status >= 400){
        throw new Error(`Server error: ${status}`);
      }
      dispatch(changeMovie(id));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const delMovie = createAsyncThunk(
  `${WATCH_SLICE_NAME}/delMovie`,
  async function(id, { rejectWithValue, dispatch}){
    try {
      const {status} = await api.delete(`/${id}`);
      if (status >= 400) {
			throw new Error(`Server error: ${status}`);
		}
    dispatch(removeMovie(id));
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const setFetching = (state) => {
  state.fetching = true;
  state.error = null;
}
const setError = (state, action) => {
  state.fetching = false;
  state.error = action.payload;
}

const toWatchSlice = createSlice({
	name: WATCH_SLICE_NAME,
	initialState,
	reducers: {
		/* createMovie: (state, { payload }) => {
			state.movies.push(payload);
		}, */
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
	extraReducers: {
		[getMovies.fulfilled]: (state, { payload }) => {
			state.movies = payload;
			state.isFetching = false;
			state.error = null;
		},
		[addMovie.fulfilled]: (state, { payload }) => {
			state.movies.push(payload);
			state.isFetching = false;
			state.error = null;
		},
		[getMovies.pending]: setFetching,
		[addMovie.pending]: setFetching,
		[toogleMovie.pending]: setFetching,
		[delMovie.pending]: setFetching,
		[getMovies.rejected]: setError,
		[addMovie.rejected]: setError,
		[toogleMovie.rejected]: setError,
		[delMovie.rejected]: setError,
	},
});

export const { createMovie, removeMovie, changeMovie } = toWatchSlice.actions;

export default toWatchSlice.reducer;
