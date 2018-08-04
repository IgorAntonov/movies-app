import { connect } from 'react-redux';

import { DetailsPage } from './DetailsPage';
import { fetchDetails, getCurrentDetails } from '../../ducks/movies';
import {
  fetchCastAndCrew,
  getCast,
  getCrew,
  getPrimaryCast,
  getPrimaryCrew
} from '../../ducks/cast-crew';
import { fetchKeywords, getKeywords } from '../../ducks/keywords';
import { fetchSimilarMovies, getSimilarMovies } from '../../ducks/similar-movies';
import { fetchMovieImages, getMovieImages } from '../../ducks/movie-images';
import { fetchMovieVideos, getMovieVideos } from '../../ducks/movie-videos';
import { fetchMovieReviews, getMovieReviews } from '../../ducks/movie-reviews';

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
  };
};

const actions = {
  fetchDetails,
  fetchCastAndCrew,
  fetchKeywords,
  fetchSimilarMovies,
  fetchMovieImages,
  fetchMovieVideos,
  fetchMovieReviews
};

export const DetailsPageContainer = connect(
  mapStateToProps,
  actions
)(DetailsPage);
