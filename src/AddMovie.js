import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
const AddMovie = () => {
	const name = useFormInput('', 'name');
	const price = useFormInput('', 'price');
	const [movies, setMovies] = useContext(MovieContext);
	const { reset } = useFormInput('');

	const addMovie = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [
			...prevMovies,
			{ name: name.value, price: price.value },
		]);
		reset();
	};

	return (
		<div>
			<form onSubmit={addMovie}>
				<input {...name} />
				<input {...price} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default AddMovie;

const useFormInput = (initialValue, title) => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (e) => setValue(e.target.value);

	return {
		type: 'text',
		placeholder: title,
		value: value,
		onChange: handleChange,
		reset: () => setValue(''),
	};
};
