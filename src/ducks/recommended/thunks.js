import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../../constants/api';
import { movieListSchema } from '../../schemas/movies';

export const fetchRecommendedMovies = (page, id) => dispatch => {
  dispatch(actions.requestRecommended());

  const url = `${BASIC_URL}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });  
      const normalizedRecommendedMovies = normalize(data, movieListSchema).entities.movies;
      dispatch(actions.successRecommended({ normalizedRecommendedMovies, id, total_pages }));    
    });
};
