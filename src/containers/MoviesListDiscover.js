import { connect } from 'react-redux';

import { MoviesList } from '../features/MoviesList';
import { fetchDiscoverMovies, getSortedDiscoverMovies } from '../ducks/discover-movies';

const mapStateToProps = ( state, ownProps ) => {
  const { sort, date, cert, genres } = ownProps;
  return {
  movies: getSortedDiscoverMovies(state.discoverMovies[`${sort}${date}${cert}${genres}`], ownProps.sort),
  fetching: state.discoverMovies.fetching,
  totalPages: state.discoverMovies.currentTotalPages,
  }
};

export default connect(mapStateToProps, { fetchMovies: fetchDiscoverMovies})(MoviesList);