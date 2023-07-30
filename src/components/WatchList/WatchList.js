import React from 'react';
import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';
import { deleteMovie, toggleMovie } from '../../store/actions/actions';

function WatchList({ movies, deleteMovie, toggleMovie }) {
	return (
		<div>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						onDelete={deleteMovie}
						onToggle={toggleMovie}
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

const mapStateToProps = ({movies}) => ({movies})

const mapDispatchToProps = {
	deleteMovie,
	toggleMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
