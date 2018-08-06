import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import noPoster from '../../../img/noPoster.png';

export const MovieItem = ({ movie }) => {
  const overview = movie.overview // eslint-disable-line
    ? movie.overview.length < 150 ? movie.overview : `${movie.overview.slice(0, 151)}...`
    : 'No description available';
  return (
    <div key={movie.id} className="movieItem">
      <Link to={`/movies/${movie.id}`} className="movieItem__link">
        <div className="movieItem__poster">
          {movie.backdrop_path
            ? <img alt="poster" src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} />
            : <img alt="poster" src={noPoster} />}
        </div>
        <h5 className="movieItem__title">
          {movie.title} ({parseFloat(movie.release_date)})
        </h5>
        <p className="movieItem__overview">
          {overview}
        </p>
      </Link>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired
  }).isRequired
};

MovieItem.defaultProps = {
  backdrop_path: null
};
