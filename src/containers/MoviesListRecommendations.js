import { connect } from 'react-redux';

import { MoviesList } from '../features/MoviesList';
import { fetchRecommendedMovies, getRecommendedMovies } from '../ducks/recommended';

const mapStateToProps = (state, ownProps) => ({
  movies: getRecommendedMovies(state.recommendedMoviesByMovieId[ownProps.id]),
  fetching: state.recommendedMoviesByMovieId.fetching,
  totalPages: state.recommendedMoviesByMovieId.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchRecommendedMovies})(MoviesList);
