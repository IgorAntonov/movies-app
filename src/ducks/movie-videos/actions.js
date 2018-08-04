import { createAction } from 'redux-act';

export const actions = {
  requestMovieVideos: createAction('details/VIDEOS_REQUEST'),
  successMovieVideos: createAction('details/VIDEOS_SUCCESS')
};
