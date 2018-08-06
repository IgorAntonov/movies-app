import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import { getSortedMoviesArray } from '../../ducks/movies';
import { fetchMoviesByQuery } from '../../ducks/movies-by-query';

const mapStateToProps = (state, ownProps) => ({
  movies: getSortedMoviesArray(state.moviesByQuery[ownProps.id], 'popularity'),
  fetching: state.moviesByQuery.fetching,
  totalPages: state.moviesByQuery.currentTotalPages,
});

const ConnectedMoviesByQuery = connect(
  mapStateToProps,
  { fetchMovies: fetchMoviesByQuery }
)(MoviesList);

export const MoviesByQuery = ({ match }) => (
  <ConnectedMoviesByQuery id={match.params.query} />
);

MoviesByQuery.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string
    }),
  }).isRequired,
};
