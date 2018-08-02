import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList';
import wrapMoviesList from '../components/HOC/wrapMoviesList';
import { getSortedDiscoverMovies } from '../reducers/discoverMovies';
import { fetchDiscoverMovies } from '../actions/discoverMovies';

const WrappedMoviesList = wrapMoviesList(MoviesList);

const mapStateToProps = ( state, ownProps ) => {
  const { sort, date, cert, genres } = ownProps;
  return {
  movies: getSortedDiscoverMovies(state.discoverMovies[`${sort}${date}${cert}${genres}`], ownProps.sort),
  fetching: state.discoverMovies.fetching,
  totalPages: state.discoverMovies.currentTotalPages,
  }
};

export default connect(mapStateToProps, { fetchMovies: fetchDiscoverMovies})(WrappedMoviesList);