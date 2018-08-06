import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchDiscoverMovies,
  getSortedDiscoverMovies
} from '../../ducks/discover-movies';

const mapStateToProps = (state, {
  sort, date, cert, genres
}) => ({
  movies: getSortedDiscoverMovies(state.discoverMovies[`${sort}${date}${cert}${genres}`], sort),
  fetching: state.discoverMovies.fetching,
  totalPages: state.discoverMovies.currentTotalPages
});

const ConnectedDiscoverList = connect(
  mapStateToProps,
  { fetchMovies: fetchDiscoverMovies }
)(MoviesList);

export const DiscoverMovies = ({ match }) => {
  const {
    cert, date, sort, genres
  } = match.params;
  return (
    <ConnectedDiscoverList
      cert={cert}
      date={date}
      sort={sort}
      genres={genres}
    />
  );
};

DiscoverMovies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cert: PropTypes.string,
      date: PropTypes.string,
      sort: PropTypes.string,
      genres: PropTypes.string
    }),
  }).isRequired,
};
