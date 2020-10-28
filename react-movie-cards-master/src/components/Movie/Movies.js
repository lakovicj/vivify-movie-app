import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from './MovieForm';

export default class Movies extends Component {
  constructor() {
    super();
    this.addMovie = this.addMovie.bind(this);
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
    
    // za postavljanje ID-a
    const moviesLength = this.state.movies.length + 1;
    newMovie['id'] = moviesLength * 100;
    newMovie['rating'] = 0;

    let allMovies = this.state.movies;
    allMovies.push(newMovie)

    this.setState(() => ({
      movies: allMovies
    }));
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies}/>
          </div>
        </div>
        <div className="d-flex flex-row">
          <MovieForm addMovie={this.addMovie}/>
        </div>
      </div>

      
    );
  }
}
