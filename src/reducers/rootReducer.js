import { combineReducers } from 'redux';

import movies from './movies';
import cast from './cast';
import crew from './crew';
import keywords from './keywords';
import similarMovies from './similarMovies';
import movieImages from './movieImages';
import movieVideos from './movieVideos';
import recommendedMovies from './recommendedMovies';
import movieReviews from './movieReviews';
import genreMovies from './genreMovies';
import personDetails from './personDetails';
import { personCastCredits, personCrewCredits } from './personCredits';
import moviesByKeyword from './moviesByKeyword';
import personByQuery from './personByQuery';
import moviesByQuery from './moviesByQuery';
import discoverMovies from './discoverMovies';

const rootReducer = combineReducers({
  moviesById: movies,
  castByMovieId: cast,
  crewByMovieId: crew,
  keywordsByMovieId: keywords,
  similarMoviesByMovieId: similarMovies,
  movieImagesByMovieId: movieImages,
  movieVideosByMovieId: movieVideos,
  recommendedMoviesByMovieId: recommendedMovies,
  movieReviewsByMovieId: movieReviews,
  genreMovies,
  personDetails,
  personCastCredits,
  personCrewCredits,
  moviesByKeyword,
  personByQuery,
  moviesByQuery,
  discoverMovies
});

export default rootReducer;



