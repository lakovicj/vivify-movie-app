import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, updateRating, movieId }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  const handleClick = (val) => {
    updateRating(movieId, val);
  }

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg"  onClick={() => handleClick(1)} style={styles.star}></i>
            <i className="fa fa-star-o fa-lg"  onClick={() => handleClick(2)} style={styles.star}></i>
            <i className="fa fa-star-o fa-lg"  onClick={() => handleClick(3)} style={styles.star}></i>
            <i className="fa fa-star-o fa-lg"  onClick={() => handleClick(4)} style={styles.star}></i>
            <i className="fa fa-star-o fa-lg"  onClick={() => handleClick(5)} style={styles.star}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
