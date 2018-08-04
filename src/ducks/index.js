import { combineReducers } from 'redux';

import { reducer as moviesById } from './movies';
import {
  castReducer as castByMovieId,
  crewReducer as crewByMovieId
} from './cast-crew';
import {
  keywordReducer as keywordsByMovieId,
  moviesByKeywordReducer as moviesByKeyword
} from './keywords';
import { reducer as similarMoviesByMovieId } from './similar-movies';
import { reducer as movieImagesByMovieId } from './movie-images';
import { reducer as movieVideosByMovieId } from './movie-videos';
import { reducer as recommendedMoviesByMovieId } from './recommended';
import { reducer as movieReviewsByMovieId } from './movie-reviews';
import { reducer as genreMovies } from './genre-movies';
import { reducer as personDetails } from './person-details';
import {
  personCastReducer as personCastCredits,
  personCrewReducer as personCrewCredits
} from './person-cast-crew';
import { reducer as personByQuery } from './person-by-query';
import { reducer as moviesByQuery } from './movies-by-query';
import { reducer as discoverMovies } from './discover-movies';

export const rootReducer = combineReducers({
  moviesById,
  castByMovieId,
  crewByMovieId,
  keywordsByMovieId,
  similarMoviesByMovieId,
  movieImagesByMovieId,
  movieVideosByMovieId,
  recommendedMoviesByMovieId,
  movieReviewsByMovieId,
  genreMovies,
  personDetails,
  personCastCredits,
  personCrewCredits,
  moviesByKeyword,
  personByQuery,
  moviesByQuery,
  discoverMovies
});
