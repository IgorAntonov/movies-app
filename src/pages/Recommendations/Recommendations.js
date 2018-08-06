import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchRecommendedMovies,
  getRecommendedMovies
} from '../../ducks/recommended';

const mapStateToProps = (state, ownProps) => ({
  movies: getRecommendedMovies(state.recommendedMoviesByMovieId[ownProps.id]),
  fetching: state.recommendedMoviesByMovieId.fetching,
  totalPages: state.recommendedMoviesByMovieId.currentTotalPages
});

const ConnectedRecommendations = connect(
  mapStateToProps,
  { fetchMovies: fetchRecommendedMovies }
)(MoviesList);

export const Recommendations = ({ match }) => (
  <ConnectedRecommendations id={match.params.id} />
);

Recommendations.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }),
  }).isRequired,
};
