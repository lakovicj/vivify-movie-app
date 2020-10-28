import React, {useState} from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, deleteMovie, updateRating }) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} updateRating={updateRating} movieId={movie.id} />
            </div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill"
              onMouseEnter={(e) => setIsShown(true)}
              onMouseLeave={(e) => setIsShown(false)}
            >{movie.rating}</div>
            
            {isShown ? movie.ratingCounter ? alert(movie.ratingCounter, " people rated") : alert("1 people rated") : null}
            
          </div>
        </div>
        <div>
          {movie.isAdded ? (<button className="btn btn-danger" type="button" onClick={() => deleteMovie(movie.id)}>DELETE</button>) : null}
        </div>
      </div>
    </div>
  );

}


MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
