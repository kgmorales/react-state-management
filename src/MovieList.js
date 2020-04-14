import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			{movies.map((movie) => (
				<li>
					<Movie
						name={movie.name}
						price={movie.price}
						key={movie.id}
					/>
				</li>
			))}
		</div>
	);
};

export default MovieList;
