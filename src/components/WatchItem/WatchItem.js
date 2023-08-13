import React/* , { useEffect } */ from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeMovie, changeMovie } from '../../store/slices/toWatchSlice'
import api from '../../api/movie-service';
import './WatchItem.css';

const stylesWatchItem = {
	color: 'blue',
};

function toggleBackground(movie) {
	return {
		...stylesWatchItem,
		backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod',
	};
}

function WatchItem({ movie }) {

	const dispatch = useDispatch();
	function onMovieDelete(e) {
		e.stopPropagation();
		api.delete(`/${movie.id}`).then(({ statusText }) =>
			console.log(statusText)
		);
		dispatch(removeMovie(movie.id));
	}

	function onToggle(e){
		e.stopPropagation();
		api.put(`/${movie.id}`, movie)
			.then(({ data }) => dispatch(changeMovie(data.id)))
			.catch(({ status }) => console.log(status));
	}
	return (
		<div
			className='watch-item'
			style={toggleBackground(movie)}
			onClick={onToggle}
		>
			<p className='content'>
				{movie.title} produced by {movie.director}
			</p>
			<span className='delete-btn' onClick={onMovieDelete}>
				X
			</span>
		</div>
	);
}
WatchItem.propTypes = {
	movie: PropTypes.object,
};

WatchItem.defaultProps = {
	movie: {},
}



export default WatchItem;
