import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { actions } from './actions';
import { movieListSchema } from '../../schemas/movies';
import { API_KEY, BASIC_URL } from '../../constants/api';

export const fetchMoviesByQuery = (page, query) => dispatch => {
  dispatch(actions.requestMovies());
  
  const url = `${BASIC_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;

  return axios.get(url)
    .then(response => {
   
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      });

      const normalizedData = normalize(data, movieListSchema).entities.movies;
      dispatch(actions.successMovies({ normalizedData, total_pages, query }));
    });      
};
