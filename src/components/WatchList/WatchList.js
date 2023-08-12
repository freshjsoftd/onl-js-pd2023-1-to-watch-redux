import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { getMoviesAction } from '../../store/actions/actions';
import WatchItem from '../WatchItem/WatchItem';


function WatchList() {

	const movies = useSelector((store) => store.movies);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMoviesAction());
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
