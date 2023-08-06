import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import api from '../../api/movie-service';
import { getMovies } from '../../store/actions/actions';
import WatchItem from '../WatchItem/WatchItem';


function WatchList() {

	const {movies} = useSelector((store) => store);
	const dispatch = useDispatch()


	useEffect(() => {
		api.get('/')
			.then(({ data }) => dispatch(getMovies(data)))
			.catch(({ status }) => console.log(status));
	}, [dispatch]);
	
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
