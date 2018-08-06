import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchMoviesByKeyword,
  getKeywordsMovies
} from '../../ducks/keywords';

const mapStateToProps = (state, { id }) => ({
  movies: getKeywordsMovies(state.moviesByKeyword[id]),
  fetching: state.moviesByKeyword.fetching,
  totalPages: state.moviesByKeyword.currentTotalPages
});

const ConnectedKeywordsList = connect(
  mapStateToProps,
  { fetchMovies: fetchMoviesByKeyword }
)(MoviesList);

export const KeywordsMoviesList = ({ match }) => (
  <ConnectedKeywordsList id={match.params.id} />
);

KeywordsMoviesList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }),
  }).isRequired,
};
