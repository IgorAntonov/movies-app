import { fetchDetails } from '../movies';
import { fetchCastAndCrew } from '../cast-crew';
import { fetchKeywords } from '../keywords';
import { fetchSimilarMovies } from '../similar-movies';
import { fetchMovieImages } from '../movie-images';
import { fetchMovieVideos } from '../movie-videos';
import { fetchMovieReviews } from '../movie-reviews';

export const fetchAllDetails = (movieId, cb) => async dispatch => {
  await Promise.all([
    dispatch(fetchDetails(movieId)),
    dispatch(fetchCastAndCrew(movieId)),
    dispatch(fetchKeywords(movieId)),
    dispatch(fetchSimilarMovies(movieId)),
    dispatch(fetchMovieImages(movieId)),
    dispatch(fetchMovieVideos(movieId)),
    dispatch(fetchMovieReviews(movieId))
  ]);
  cb();
};
