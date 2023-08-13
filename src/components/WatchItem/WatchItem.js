import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { delMovie, toogleMovie } from '../../store/slices/toWatchSlice'
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
		dispatch(delMovie(movie.id));
	}

	function onToggle(e){
		e.stopPropagation();
		
		 dispatch(toogleMovie(movie.id));
			
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
