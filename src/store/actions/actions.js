import ACTION_TYPES from "./actionTypes";
// Creating
export const addMovieAction  = (newMovie) => {
  return {
		type: ACTION_TYPES.POST_MOVIE_ACTION,
		payload: newMovie,
  };
}
export const addMovieRequest  = () => {
  return {
		type: ACTION_TYPES.POST_MOVIE_REQUEST,
  };
}
export const addMovieSuccess  = (newMovie) => {
  return {
		type: ACTION_TYPES.POST_MOVIE_SUCCESS,
		payload: newMovie,
  };
}
export const addMovieError  = (error) => {
  return {
		type: ACTION_TYPES.POST_MOVIE_ERROR,
		payload: error,
  };
}
// Updating
export const toggleMovieAction = (changedMovie) => {
	return {
		type: ACTION_TYPES.PUT_MOVIE_ACTION,
		payload: changedMovie,
	};
};
export const toggleMovieRequest = () => {
	return {
		type: ACTION_TYPES.PUT_MOVIE_REQUEST,
	};
};
export const toggleMovieSuccess = (changedMovie) => {
	return {
		type: ACTION_TYPES.PUT_MOVIE_SUCCESS,
		payload: changedMovie,
	};
};
export const toggleMovieError = (error) => {
	return {
		type: ACTION_TYPES.DELETE_MOVIE_ERROR,
		payload: error,
	};
};
// Deleting
export const deleteMovieAction = (id) => {
	return {
		type: ACTION_TYPES.DELETE_MOVIE_ACTION,
		payload: id,
	};
};
export const deleteMovieRequest = () => {
	return {
		type: ACTION_TYPES.DELETE_MOVIE_REQUEST,
	};
};
export const deleteMovieSuccess = (id) => {
	return {
		type: ACTION_TYPES.DELETE_MOVIE_SUCCESS,
		payload: id,
	};
};
export const deleteMovieError = (error) => {
	return {
		type: ACTION_TYPES.DELETE_MOVIE_ERROR,
		payload: error,
	};
};
// Getting
export const getMoviesAction = () => {
	return {
		type: ACTION_TYPES.GET_MOVIES_ACTION,
	};
};
export const getMoviesRequest = () => {
	return {
		type: ACTION_TYPES.GET_MOVIES_REQUEST,
	};
};
export const getMoviesSuccess = (movies) => {
	return {
		type: ACTION_TYPES.GET_MOVIES_SUCCESS,
    payload: movies,
	};
};
export const getMoviesError = (error) => {
	return {
		type: ACTION_TYPES.GET_MOVIES_ERROR,
		payload: error,
	};
};
