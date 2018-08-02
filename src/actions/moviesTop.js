import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { BASIC_URL, API_KEY } from '../constants/api';
import { movieListSchema } from '../schemas/movies';
import * as actions from '../constants/actionTypes';

export const fetchTopMovies = page => (dispatch) => {
  
  dispatch(requestTopMovies());

  const url = `${BASIC_URL}movie/top_rated?api_key=${API_KEY}&language=en-Us&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'video', 'adult']);
      });   
      const normalizedData = normalize(data, movieListSchema).entities.movies;

      dispatch(receiveTopMovies(normalizedData, total_pages));
    });
};

const receiveTopMovies = (data, totalPages) => ({
  type: actions.TOP_RECEIVED,
  payload: data,
  fetching: false,
  totalPages
});

const requestTopMovies = () => ({
  type: actions.TOP_REQUESTED,
  fetching: true
});