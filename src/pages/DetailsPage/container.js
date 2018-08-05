import { connect } from 'react-redux';

import { DetailsPage } from './DetailsPage';
import { getCurrentDetails } from '../../ducks/movies';
import { getPrimaryCast, getPrimaryCrew } from '../../ducks/cast-crew';
import { getKeywords } from '../../ducks/keywords';
import { getSimilarMovies } from '../../ducks/similar-movies';
import { getMovieImages } from '../../ducks/movie-images';
import { getMovieVideos } from '../../ducks/movie-videos';
import { getMovieReviews } from '../../ducks/movie-reviews';
import { fetchAllDetails } from '../../ducks/common';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    details: getCurrentDetails(state.moviesById.currentDetails),
    primaryCrew: getPrimaryCrew(state.crewByMovieId[id]),
    primaryCast: getPrimaryCast(state.castByMovieId[id]),
    keywords: getKeywords(state.keywordsByMovieId[id]),
    similarMovies: getSimilarMovies(state.similarMoviesByMovieId[id]),
    movieImages: getMovieImages(state.movieImagesByMovieId[id]),
    movieVideos: getMovieVideos(state.movieVideosByMovieId[id]),
    movieReviews: getMovieReviews(state.movieReviewsByMovieId[id]),
  };
};

export const DetailsPageContainer = connect(
  mapStateToProps,
  { fetchAllDetails }
)(DetailsPage);
