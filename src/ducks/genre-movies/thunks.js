import axios from 'axios';
import { omit } from 'lodash';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { BASIC_URL, API_KEY } from '../api-constants';
import { movieListSchema } from '../movies-schema';

export const fetchGenreMovies = (page, genreId) => dispatch => {
  dispatch(actions.requestGenreMovies());
  const url = `${BASIC_URL}genre/${genreId}/movies?api_key=${API_KEY}&language=en-Us&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages, id } = response.data;
      const data = results.map(result => omit(result, [
        'genre_ids',
        'vote_count',
        'vote_average',
        'video',
        'adult'
      ]));
      const { movies } = normalize(data, movieListSchema).entities;

      dispatch(actions.successGenreMovies({ movies, total_pages, id }));
    });
};
