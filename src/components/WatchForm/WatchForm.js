import React,  { useState} from 'react';
import { useDispatch } from 'react-redux'

import { addMovieAction } from '../../store/actions/actions';

import './WatchForm.css'

function WatchForm() {

	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [director, setDirector] = useState('');

	function onInputChange(e) {
		e.target.name === 'title' && setTitle(e.target.value);
		e.target.name === 'director' && setDirector(e.target.value);
	}

  function onFormSubmit(e){
    e.preventDefault();
		const movie = { 
			title, 
			director, 
			isDone: false
		}
		dispatch(addMovieAction(movie));
  }

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				name='title'
				value={title}
				onChange={onInputChange}
			/>
			<input
				type='text'
				name='director'
				value={director}
				onChange={onInputChange}
			/>
			<button className='add'>Add</button>
		</form>
	);
}

export default WatchForm;

 