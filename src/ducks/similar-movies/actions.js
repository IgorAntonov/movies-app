import { createAction } from 'redux-act';

export const actions = {
  requestSimilarMovies: createAction('similar-movies/REQUEST'),
  successSimilarMovies: createAction('similar-movies/SUCCESS')
};
