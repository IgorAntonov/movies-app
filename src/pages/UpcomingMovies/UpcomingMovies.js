import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchUpcomingMovies, getSortedMoviesArray
} from '../../ducks/movies';

const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.upcoming, 'popularity'),
  fetching: state.moviesById.upcoming.fetching,
  totalPages: state.moviesById.currentTotalPages
});

export const UpcomingMovies = connect(
  mapStateToProps,
  { fetchMovies: fetchUpcomingMovies }
)(MoviesList);
