import axios from 'axios';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { movieImagesListSchema } from './schema';

export const fetchMovieImages = movieId => dispatch => {
  dispatch(actions.requestMovieImages());
  const url = `${BASIC_URL}movie/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`;
  return axios.get(url)
    .then(response => {
      const { id, posters } = response.data;
      const { movieImages } = normalize(posters, movieImagesListSchema).entities;

      dispatch(actions.successMovieImages({ movieImages, id }));
    });
};
