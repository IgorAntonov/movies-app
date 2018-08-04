import { createAction } from 'redux-act';

export const actions = {
  requestReviews: createAction('movie-reviews/REQUEST'),
  successReviews: createAction('movie-reviews/SUCCESS'),
};
