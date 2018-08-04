import axios from 'axios';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { movieReviewsListSchema } from './schema';

export const fetchMovieReviews = movieId => dispatch => {
  dispatch(actions.requestReviews());
  const url = `${BASIC_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return axios.get(url)
    .then(response => {
      const { id, results } = response.data;
      const { movieReviews } = normalize(results, movieReviewsListSchema).entities;
      dispatch(actions.successReviews({ movieReviews, id }));
    });
};
