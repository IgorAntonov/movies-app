import { createAction } from 'redux-act';

export const actions = {
  requestMovieImages: createAction('details/IMAGES_REQUEST'),
  successMovieImages: createAction('details/IMAGES_SUCCESS')
};
