import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';
import wrapMoviesList from '../components/HOC/wrapMoviesList';
import { fetchGenreMovies } from '../actions/moviesByGenre';
import { getGenreMoviesArray } from '../reducers/genreMovies';

const WrappedMoviesList = wrapMoviesList(MoviesList);

const mapStateToProps = (state, ownProps) => ({
  fetching: state.genreMovies.fetching,
  totalPages: state.genreMovies.totalPages,
  movies: getGenreMoviesArray(state.genreMovies[ownProps.id])
});

export default connect(mapStateToProps, {fetchMovies: fetchGenreMovies})(WrappedMoviesList);