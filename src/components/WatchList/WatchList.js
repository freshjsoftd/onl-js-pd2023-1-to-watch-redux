import React from 'react';
import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';


function WatchList() {
	
	const {movies} = useSelector((store) => store);
	return (
		<div>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
					/>
				);
			})}
		</div>
	);
}

/* WatchList.propTypes = {
	movies: PropTypes.array.isRequired,
	onToggle: PropTypes.func
}; */



export default WatchList
