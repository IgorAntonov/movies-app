import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoviesList from '../components/MoviesList';
import { fetchUpcomingMovies, getSortedMoviesArray } from '../ducks/movies';
import wrapMoviesList from '../components/HOC/wrapMoviesList';

const WrappedMoviesList = wrapMoviesList(MoviesList);


const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.upcoming, 'popularity'),
  fetching: state.moviesById.upcoming.fetching,
  totalPages: state.moviesById.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchUpcomingMovies})(WrappedMoviesList);

WrappedMoviesList.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array
};