import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';
import { fetchMoviesByKeyword, getKeywordsMovies } from '../ducks/keywords';
import wrapMoviesList from '../components/HOC/wrapMoviesList';


const WrappedMoviesList = wrapMoviesList(MoviesList);


const mapStateToProps = (state, ownProps) => ({
  movies: getKeywordsMovies(state.moviesByKeyword[ownProps.id]),
  fetching: state.moviesByKeyword.fetching,
  totalPages: state.moviesByKeyword.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchMoviesByKeyword})(WrappedMoviesList);