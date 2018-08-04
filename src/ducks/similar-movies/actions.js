import { createAction } from 'redux-act';

export const actions = {
  requestSimilarMovies: createAction('details/SIMILAR_REQUEST'),
  succesSimilarMoviess: createAction('details/SIMILAR_SUCCESS')
};
