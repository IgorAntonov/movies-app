import axios from 'axios';
import { normalize } from 'normalizr';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { movieImagesListSchema } from '../schemas/movieImages';

export const fetchMovieImages = id => dispatch => {
  dispatch(requestMovieImages());

  const url = `${BASIC_URL}movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`;

  return axios.get(url)
    .then(response => {
      const { id, posters } = response.data;
      
      const normalizedMovieImages = normalize(posters, movieImagesListSchema).entities.movieImages;
      
      dispatch(receiveMovieImages(normalizedMovieImages, id));    
    });
};

const requestMovieImages = () => ({
  type: actions.MOVIE_IMAGES_REQUESTED
});

const receiveMovieImages = (images, id) => ({
  type: actions.MOVIE_IMAGES_RECEIVED,
  images,
  id
});