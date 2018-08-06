import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchPopularMovies,
  getSortedMoviesArray
} from '../../ducks/movies';

const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.popular, 'popularity'),
  fetching: state.moviesById.popular.fetching,
  totalPages: state.moviesById.currentTotalPages,
});

export const PopularMovies = connect(
  mapStateToProps,
  { fetchMovies: fetchPopularMovies }
)(MoviesList);
