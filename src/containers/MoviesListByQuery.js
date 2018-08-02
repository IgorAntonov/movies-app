import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';
import { getSortedMoviesArray } from '../reducers/movies';
import { fetchMoviesByQuery } from '../actions/moviesByQuery';
import wrapMoviesList from '../components/HOC/wrapMoviesList';


const WrappedMoviesList = wrapMoviesList(MoviesList);

const mapStateToProps = ( state, ownProps ) => ({
  movies: getSortedMoviesArray(state.moviesByQuery[ownProps.id], 'popularity'),
  fetching: state.moviesByQuery.fetching,
  totalPages: state.moviesByQuery.currentTotalPages,
});

export default connect(mapStateToProps, { fetchMovies: fetchMoviesByQuery})(WrappedMoviesList);
