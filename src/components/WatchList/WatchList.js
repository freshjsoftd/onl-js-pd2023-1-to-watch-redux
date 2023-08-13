import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies } from '../../store/slices/toWatchSlice';
import WatchItem from '../WatchItem/WatchItem';


function WatchList() {

	const movies = useSelector((store) => store.moviesList.movies);
	// const contacts = useSelector((store) => store.contactsList.contacts);
	const dispatch = useDispatch();

	// console.log(contacts);


	useEffect(() => {
		dispatch(getMovies());
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


export default WatchList
