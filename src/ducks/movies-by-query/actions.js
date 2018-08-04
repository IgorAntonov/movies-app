import { createAction } from 'redux-act';

export const actions = {
  requestMovies: createAction('movies-by-query/REQUEST'),
  successMovies: createAction('movies-by-query/SUCCESS')
};
