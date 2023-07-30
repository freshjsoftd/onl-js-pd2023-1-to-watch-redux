import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMovie, toggleMovie } from '../../store/actions/actions';
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

function WatchItem({ movie}) {

	const dispatch = useDispatch();
	useEffect(() => {
		// console.log(`Hello ${movie.director}`);
		return () => {
			console.log(`Bye ${movie.title}`);
		};
	}, [movie.director, movie.title]);
	function onMovieDelete(e) {
		e.stopPropagation();
		dispatch(deleteMovie(movie.id));
	}
	return (
		<div
			className='watch-item'
			style={toggleBackground(movie)}
			onClick={() => dispatch(toggleMovie(movie.id))}
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
