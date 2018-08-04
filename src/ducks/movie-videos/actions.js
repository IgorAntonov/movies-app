import { createAction } from 'redux-act';

export const actions = {
  requestMovieVideos: createAction('movie-videos/VIDEOS_REQUEST'),
  successMovieVideos: createAction('movie-videos/VIDEOS_SUCCESS')
};
