import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from './MovieForm';

export default class Movies extends Component {
  constructor() {
    super();
    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  addMovie(newMovie) {
    
    console.log("Usao u add movie");
    // za postavljanje ID-a
    const moviesLength = this.state.movies.length + 1;
    newMovie['id'] = moviesLength * 100;
    newMovie['rating'] = 0;
    newMovie['isAdded'] = true;

    let allMovies = this.state.movies;
    allMovies.push(newMovie)

    this.setState(() => ({
      movies: allMovies
    }));
  }

  deleteMovie(id) {
    console.log("Deleting movie with id=", id);
    const updatedMovies = this.state.movies.filter(movie => movie.id !== id);
    this.setState({movies: updatedMovies});
    
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie}/>
          </div>
        </div>
        <div className="d-flex flex-row">
          <MovieForm addMovie={this.addMovie}/>
        </div>
      </div>

      
    );
  }
}
