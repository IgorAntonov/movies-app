import axios from 'axios';
import { normalize } from 'normalizr';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { movieReviewsListSchema } from '../schemas/movieReviews';

export const fetchMovieReviews = id => dispatch => {
  dispatch(requestMovieReviews());

  const url = `${BASIC_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  return axios.get(url)
    .then(response => {
      const { id, results } = response.data;
      
      const normalizedMovieReviews = normalize(results, movieReviewsListSchema).entities.movieReviews;
      
      dispatch(receiveMovieReviews(normalizedMovieReviews, id));    
    });
};

const requestMovieReviews = () => ({
  type: actions.MOVIE_REVIEWS_REQUESTED
});

const receiveMovieReviews = (reviews, id) => ({
  type: actions.MOVIE_REVIEWS_RECEIVED,
  reviews,
  id
});