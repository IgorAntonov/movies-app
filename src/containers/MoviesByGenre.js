import { connect } from 'react-redux';

import { MoviesList } from '../features/MoviesList';
import { fetchGenreMovies, getGenreMoviesArray } from '../ducks/genre-movies';

const mapStateToProps = (state, ownProps) => ({
  fetching: state.genreMovies.fetching,
  totalPages: state.genreMovies.totalPages,
  movies: getGenreMoviesArray(state.genreMovies[ownProps.id])
});

export default connect(mapStateToProps, {fetchMovies: fetchGenreMovies})(MoviesList);