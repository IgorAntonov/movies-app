import { connect } from 'react-redux';

import { MoviesList } from '../features/MoviesList';
import { getSortedMoviesArray } from '../ducks/movies';
import { fetchMoviesByQuery } from '../ducks/movies-by-query';

const mapStateToProps = ( state, ownProps ) => ({
  movies: getSortedMoviesArray(state.moviesByQuery[ownProps.id], 'popularity'),
  fetching: state.moviesByQuery.fetching,
  totalPages: state.moviesByQuery.currentTotalPages,
});

export default connect(mapStateToProps, { fetchMovies: fetchMoviesByQuery})(MoviesList);
