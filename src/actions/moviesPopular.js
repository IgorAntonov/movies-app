import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { BASIC_URL, API_KEY } from '../constants/api';
import { movieListSchema } from '../schemas/movies';
import * as actions from '../constants/actionTypes';




export const fetchPopularMovies = page => dispatch => {

  dispatch(requestPopularMovies());

  const url = `${BASIC_URL}movie/popular?api_key=${API_KEY}&language=en-Us&page=${page}`;
  
  return axios.get(url)
    .then(response => {

      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });
      
      const normalizedData = normalize(data, movieListSchema).entities.movies;
      
      dispatch(receivePopularMovies(normalizedData, total_pages));
    });
};

const receivePopularMovies = (data, totalPages) => ({
  type: actions.POPULAR_RECEIVED,
  payload: data,
  fetching: false,
  totalPages
});

const requestPopularMovies = () => ({
  type: actions.POPULAR_REQUESTED,
  fetching: true
});