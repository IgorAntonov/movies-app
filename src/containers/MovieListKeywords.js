import { connect } from 'react-redux';

import { MoviesList } from '../features/MoviesList';
import { fetchMoviesByKeyword, getKeywordsMovies } from '../ducks/keywords';

const mapStateToProps = (state, ownProps) => ({
  movies: getKeywordsMovies(state.moviesByKeyword[ownProps.id]),
  fetching: state.moviesByKeyword.fetching,
  totalPages: state.moviesByKeyword.currentTotalPages
});

export default connect(mapStateToProps, {fetchMovies: fetchMoviesByKeyword})(MoviesList);