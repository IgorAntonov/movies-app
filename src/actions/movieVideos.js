import axios from 'axios';
import { normalize } from 'normalizr';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { movieVideosListSchema } from '../schemas/movieVideos';

export const fetchMovieVideos = id => dispatch => {
  dispatch(requestMovieVideos());

  const url = `${BASIC_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

  return axios.get(url)
    .then(response => {
      const { id, results } = response.data; 
      const normalizedMovieVideos = normalize(results, movieVideosListSchema).entities.movieVideos;
    
      dispatch(receiveMovieVideos(normalizedMovieVideos, id));    
    });
};

const requestMovieVideos = () => ({
  type: actions.MOVIE_VIDEOS_REQUESTED
});

const receiveMovieVideos = (videos, id) => ({
  type: actions.MOVIE_VIDEOS_RECEIVED,
  videos,
  id
});