import axios from 'axios';
import { normalize } from 'normalizr';
import { omit } from 'lodash';

import { BASIC_URL, API_KEY } from '../api-constants';
import { movieListSchema } from '../movies-schema';
import { detailsSchema } from './schema';
import { actions } from './actions';

export const fetchPopularMovies = page => dispatch => {
  dispatch(actions.requestPopular());
  const url = `${BASIC_URL}movie/popular?api_key=${API_KEY}&language=en-Us&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => omit(result, [
        'genre_ids',
        'vote_count',
        'vote_average',
        'video',
        'adult'
      ]));
      const { movies } = normalize(data, movieListSchema).entities;
      dispatch(actions.successPopular({ movies, total_pages }));
    });
};

export const fetchTopMovies = page => dispatch => {
  dispatch(actions.requestTop());
  const url = `${BASIC_URL}movie/top_rated?api_key=${API_KEY}&language=en-Us&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => omit(result, [
        'genre_ids',
        'vote_count',
        'video',
        'adult'
      ]));
      const { movies } = normalize(data, movieListSchema).entities;
      dispatch(actions.successTop({ movies, total_pages }));
    });
};

export const fetchUpcomingMovies = page => dispatch => {
  dispatch(actions.requestUpcoming());
  const url = `${BASIC_URL}movie/upcoming?api_key=${API_KEY}&language=en-Us&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => omit(result, [
        'genre_ids',
        'vote_count',
        'vote_average',
        'video',
        'adult'
      ]));
      const { movies } = normalize(data, movieListSchema).entities;
      dispatch(actions.successUpcoming({ movies, total_pages }));
    });
};

export const fetchDetails = (id) => (dispatch) => {
  dispatch(actions.requestDetails());
  const url = `${BASIC_URL}movie/${id}?api_key=${API_KEY}&language=en-Us`;
  return axios.get(url)
    .then(response => {
      const { data } = response;
      const { details } = normalize(data, detailsSchema).entities;
      dispatch(actions.successDetails(details));
    });
};
