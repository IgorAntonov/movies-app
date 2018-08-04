import { createAction } from 'redux-act';

export const actions = {
  requestDetails: createAction('movies/DETAILS_REQUEST'),
  successDetails: createAction('movies/DETAILS_SUCCESS'),
  requestPopular: createAction('movies/POPULAR_REQUEST'),
  successPopular: createAction('movies/POPULAR_SUCCESS'),
  requestTop: createAction('movies/TOP_REQUEST'),
  successTop: createAction('movies/TOP_SUCCESS'),
  requestUpcoming: createAction('movies/UPCOMING_REQUEST'),
  successUpcoming: createAction('movies/UPCOMING_SUCCESS')
};
