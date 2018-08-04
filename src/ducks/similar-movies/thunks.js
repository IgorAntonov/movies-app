import axios from 'axios';
import { normalize } from 'normalizr';
import { omit } from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { movieListSchema } from '../movies-schema';

export const fetchSimilarMovies = id => dispatch => {
  dispatch(actions.requestSimilarMovies());
  const url = `${BASIC_URL}movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  return axios.get(url)
    .then(response => {
      const { results } = response.data;
      const data = results.map(result => omit(result, [
        'genre_ids',
        'vote_count',
        'vote_average',
        'video',
        'adult'
      ]));
      const { movies } = normalize(data, movieListSchema).entities;
      dispatch(actions.successSimilarMovies({ movies, id }));
    });
};
