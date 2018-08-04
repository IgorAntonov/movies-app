import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoviesList from '../components/MoviesList';
import { fetchRecommendedMovies, getRecommendedMovies } from '../ducks/recommended';
import wrapMoviesList from '../components/HOC/wrapMoviesList';


const WrappedMoviesList = wrapMoviesList(MoviesList);


const mapStateToProps = (state, ownProps) => ({
  movies: getRecommendedMovies(state.recommendedMoviesByMovieId[ownProps.id]),
  fetching: state.recommendedMoviesByMovieId.fetching,
  totalPages: state.recommendedMoviesByMovieId.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchRecommendedMovies})(WrappedMoviesList);

WrappedMoviesList.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array
};