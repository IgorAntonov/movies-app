import React from 'react';
import PropTypes from 'prop-types';

import { MovieItem } from './MovieItem';
import { withPagination } from './withPagination';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

const MoviesList = ({ movies, children }) => {
  if (movies.length) {
    return (
      <div className="movieList">
        {movies.map(movie => (
          <MovieItem
            movie={movie}
            key={movie.id}
          />
        ))}
        {children}
      </div>
    );
  }
  return (
    <div className="detailsSpinnerWrapper">
      <LoadingSpinner />
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any // eslint-disable-line
};

MoviesList.defaultProps = {
  children: undefined
};

export const PaginatedMoviesList = withPagination(MoviesList);
