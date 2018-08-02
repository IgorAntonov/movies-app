import axios from 'axios';
import _ from 'lodash';
import { normalize } from 'normalizr';

import { BASIC_URL, API_KEY } from '../constants/api';
import * as actions from '../constants/actionTypes';
import { movieListSchema } from '../schemas/movies';

export const fetchGenreMovies = (page, genreId) => dispatch => {
  dispatch(requestGenreMovies());

  const url = `${BASIC_URL}genre/${genreId}/movies?api_key=${API_KEY}&language=en-Us&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages, id } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });
      const normalizedData = normalize(data, movieListSchema).entities.movies;

      dispatch(receiveGenreMovies(normalizedData, total_pages, id));
    });
};



const requestGenreMovies = () => ({
  type: actions.GENRE_MOVIES_REQUESTED,
  fetching: true
});

const receiveGenreMovies = (data, totalPages, id) => ({
  type: actions.GENRE_MOVIES_RECEIVED,
  data,
  totalPages,
  id,
  fetching: false
});