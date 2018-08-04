import { createAction } from 'redux-act';

export const actions = {
  requestGenreMovies: createAction('genre/REQUEST'),
  successGenreMovies: createAction('genre/SUCCESS')
};
