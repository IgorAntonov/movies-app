import { createAction } from 'redux-act';

export const actions = {
  requestMovieImages: createAction('movie-images/IMAGES_REQUEST'),
  successMovieImages: createAction('movie-images/IMAGES_SUCCESS')
};
