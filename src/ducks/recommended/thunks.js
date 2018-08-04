import axios from 'axios';
import { normalize } from 'normalizr';
import { omit } from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { movieListSchema } from '../movies-schema';

export const fetchRecommendedMovies = (page, id) => dispatch => {
  dispatch(actions.requestRecommended());
  const url = `${BASIC_URL}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=${page}`;
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
      dispatch(actions.successRecommended({
        movies,
        id,
        total_pages
      }));
    });
};
