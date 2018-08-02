import { connect } from 'react-redux';

import DetailsPage from '../components/DetailsPage';
import { fetchDetails } from '../actions/moviesDetails';
import { fetchCastAndCrew } from '../actions/moviesCastAndCrew';
import { fetchKeywords } from '../actions/moviesKeywords';
import { fetchSimilarMovies } from '../actions/similarMovies';
import { fetchMovieImages } from '../actions/movieImages';
import { fetchMovieVideos } from '../actions/movieVideos';
import { fetchMovieReviews } from '../actions/movieReviews';
import { getCurrentDetails } from '../reducers/movies';
import { getCast, getPrimaryCast } from '../reducers/cast';
import { getCrew, getPrimaryCrew } from '../reducers/crew';
import { getKeywords } from '../reducers/keywords';
import { getSimilarMovies } from '../reducers/similarMovies';
import { getMovieImages } from '../reducers/movieImages';
import { getMovieVideos } from '../reducers/movieVideos';
import { getMovieReviews } from '../reducers/movieReviews';

const mapStateToProps = (state, ownProps) => {
  const currentMovieId = ownProps.match.params.id;
  return {
    details: getCurrentDetails(state.moviesById.currentDetails),
    cast: getCast(state.castByMovieId[currentMovieId]),
    crew: getCrew(state.crewByMovieId[currentMovieId]),
    primaryCrew: getPrimaryCrew(state.crewByMovieId[currentMovieId]),
    primaryCast: getPrimaryCast(state.castByMovieId[currentMovieId]),
    keywords: getKeywords(state.keywordsByMovieId[currentMovieId]),
    similarMovies: getSimilarMovies(state.similarMoviesByMovieId[currentMovieId]),
    movieImages: getMovieImages(state.movieImagesByMovieId[currentMovieId]),
    movieVideos: getMovieVideos(state.movieVideosByMovieId[currentMovieId]),
    movieReviews: getMovieReviews(state.movieReviewsByMovieId[currentMovieId])
    
  } 
};

const actions = {
  fetchDetails, 
  fetchCastAndCrew, 
  fetchKeywords, 
  fetchSimilarMovies, 
  fetchMovieImages, 
  fetchMovieVideos,
  fetchMovieReviews
}

export default connect(mapStateToProps, actions)(DetailsPage);


