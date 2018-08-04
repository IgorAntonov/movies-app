import { createAction } from 'redux-act';

export const actions = {
  requestSimilarMovies: createAction('details/SIMILAR_REQUEST'),
  successSimilarMovies: createAction('details/SIMILAR_SUCCESS')
};
