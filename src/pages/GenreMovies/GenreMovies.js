import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchGenreMovies,
  getGenreMoviesArray
} from '../../ducks/genre-movies';

const mapStateToProps = (state, { id }) => ({
  movies: getGenreMoviesArray(state.genreMovies[id]),
  fetching: state.genreMovies.fetching,
  totalPages: state.genreMovies.totalPages
});

const ConnectedGenreList = connect(
  mapStateToProps,
  { fetchMovies: fetchGenreMovies }
)(MoviesList);

export const GenreMovies = ({ match }) => (
  <ConnectedGenreList id={match.params.id} />
);

GenreMovies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }),
  }).isRequired,
};
