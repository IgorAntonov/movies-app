import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoviesList from '../components/MoviesList';
import { getSortedMoviesArray } from '../reducers/movies';
import { fetchPopularMovies } from '../actions/moviesPopular';
import wrapMoviesList from '../components/HOC/wrapMoviesList';

const WrappedMoviesList = wrapMoviesList(MoviesList);


const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.popular, 'popularity'),
  fetching: state.moviesById.popular.fetching,
  totalPages: state.moviesById.currentTotalPages,
});

export default connect(mapStateToProps, {fetchMovies: fetchPopularMovies})(WrappedMoviesList);

WrappedMoviesList.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array
};


