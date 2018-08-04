import axios from 'axios';
import { normalize } from 'normalizr';
import { omit } from 'lodash';

import { actions } from './actions';
import { movieListSchema } from '../movies-schema';
import { API_KEY, BASIC_URL } from '../api-constants';

export const fetchMoviesByQuery = (page, query) => dispatch => {
  dispatch(actions.requestMovies());
  const url = `${BASIC_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
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
      dispatch(actions.successMovies({
        movies,
        total_pages,
        query
      }));
    });
};
