import { createAction } from 'redux-act';

export const actions = {
  requestGenreMovies: createAction('genre-movies/REQUEST'),
  successGenreMovies: createAction('genre-movies/SUCCESS')
};
