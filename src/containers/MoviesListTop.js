import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoviesList from '../components/MoviesList';
import { getSortedMoviesArray } from '../reducers/movies';
import { fetchTopMovies } from '../actions/moviesTop';
import wrapMoviesList from '../components/HOC/wrapMoviesList';

const WrappedMoviesList = wrapMoviesList(MoviesList);


const mapStateToProps = state => ({
  movies: getSortedMoviesArray(state.moviesById.top, 'vote_average'),
  fetching: state.moviesById.top.fetching,
  totalPages: state.moviesById.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchTopMovies})(WrappedMoviesList);

WrappedMoviesList.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array
};
