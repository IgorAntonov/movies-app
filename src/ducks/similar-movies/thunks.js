import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../../constants/api';
import { movieListSchema } from '../../schemas/movies';

export const fetchSimilarMovies = id => dispatch => {
  dispatch(actions.requestSimilarMovies());

  const url = `${BASIC_URL}movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;

  return axios.get(url)
    .then(response => {
      const { results } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });  
      const normalizedSimilarMovies = normalize(data, movieListSchema).entities.movies;
      dispatch(actions.successSimilarMovies({ normalizedSimilarMovies, id }));    
    });
};