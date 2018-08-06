import { connect } from 'react-redux';

import { MoviesList } from '../../features/MoviesList';
import {
  fetchTopMovies, getSortedMoviesArray
} from '../../ducks/movies';

const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.top, 'vote_average'),
  fetching: state.moviesById.top.fetching,
  totalPages: state.moviesById.currentTotalPages
});

export const TopMovies = connect(
  mapStateToProps,
  { fetchMovies: fetchTopMovies }
)(MoviesList);
