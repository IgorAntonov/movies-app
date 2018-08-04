import axios from 'axios';
import { normalize } from 'normalizr';
import { omit } from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { keywordsListSchema } from './schema';
import { movieListSchema } from '../movies-schema';

export const fetchKeywords = movieId => dispatch => {
  dispatch(actions.requestKeywords());
  const url = `${BASIC_URL}movie/${movieId}/keywords?api_key=${API_KEY}`;
  return axios.get(url)
    .then(response => {
      const { id, keywords } = response.data;
      const normalizedKeywords = normalize(keywords, keywordsListSchema).entities.keywords;

      dispatch(actions.successKeywords({
        keywords: normalizedKeywords,
        id
      }));
    });
};

export const fetchMoviesByKeyword = (page, id) => dispatch => {
  dispatch(actions.requestMoviesByKeyword());
  const url = `${BASIC_URL}keyword/${id}/movies?api_key=${API_KEY}&language=en-US&page=${page}`;
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
      dispatch(actions.successMoviesByKeyword({
        movies,
        id,
        total_pages
      }));
    });
};
