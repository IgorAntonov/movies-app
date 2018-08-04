import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { BASIC_URL, API_KEY } from '../../constants/api';
import { movieListSchema } from '../../schemas/movies';
import { detailsSchema } from '../../schemas/details';
import { actions } from './actions';

export const fetchPopularMovies = page => dispatch => {
  dispatch(actions.requestPopular());

  const url = `${BASIC_URL}movie/popular?api_key=${API_KEY}&language=en-Us&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });

      const normalizedData = normalize(data, movieListSchema).entities.movies;
      dispatch(actions.successPopular({ normalizedData, total_pages }));
    });
};

export const fetchTopMovies = page => (dispatch) => {
  dispatch(actions.requestTop());

  const url = `${BASIC_URL}movie/top_rated?api_key=${API_KEY}&language=en-Us&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'video', 'adult']);
      });
      const normalizedData = normalize(data, movieListSchema).entities.movies;

      dispatch(actions.successTop({ normalizedData, total_pages }));
    });
};

export const fetchUpcomingMovies = page => (dispatch) => {
  dispatch(actions.requestUpcoming());

  const url = `${BASIC_URL}movie/upcoming?api_key=${API_KEY}&language=en-Us&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });   
      const normalizedData = normalize(data, movieListSchema).entities.movies;

      dispatch(actions.successUpcoming({ normalizedData, total_pages }));
    });
};

export const fetchDetails = (id) => (dispatch) => {
  dispatch(actions.requestDetails());

  const url = `${BASIC_URL}movie/${id}?api_key=${API_KEY}&language=en-Us`;

  return axios.get(url)
    .then(response => {
      const { data } = response;     
      const normalizedData = normalize(data, detailsSchema).entities.details;   
      dispatch(actions.successDetails(normalizedData));
    });
};
