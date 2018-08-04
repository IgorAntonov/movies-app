import axios from 'axios';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../../constants/api';
import { movieVideosListSchema } from '../../schemas/movieVideos';

export const fetchMovieVideos = id => dispatch => {
  dispatch(actions.requestMovieVideos());

  const url = `${BASIC_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

  return axios.get(url)
    .then(response => {
      const { id, results } = response.data; 
      const normalizedMovieVideos = normalize(results, movieVideosListSchema).entities.movieVideos;
    
      dispatch(actions.successMovieVideos({ normalizedMovieVideos, id }));    
    });
};