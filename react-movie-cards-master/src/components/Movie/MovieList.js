import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, deleteMovie, updateRating) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} updateRating={updateRating}/>
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie, updateRating }) => <div>{getMovies(movies, deleteMovie, updateRating)}</div>;

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
