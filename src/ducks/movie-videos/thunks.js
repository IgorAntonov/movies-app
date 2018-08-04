import axios from 'axios';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { movieVideosListSchema } from './schema';

export const fetchMovieVideos = movieId => dispatch => {
  dispatch(actions.requestMovieVideos());
  const url = `${BASIC_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  return axios.get(url)
    .then(response => {
      const { id, results } = response.data;
      const { movieVideos } = normalize(results, movieVideosListSchema).entities;
      dispatch(actions.successMovieVideos({ movieVideos, id }));
    });
};
