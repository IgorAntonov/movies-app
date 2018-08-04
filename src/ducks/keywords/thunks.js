import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../../constants/api';
import { keywordsListSchema } from '../../schemas/keywords';
import { movieListSchema } from '../../schemas/movies';

export const fetchKeywords = id => dispatch => {
  dispatch(actions.requestKeywords());

  const url = `${BASIC_URL}movie/${id}/keywords?api_key=${API_KEY}`;

  return axios.get(url)
    .then(response => {
      const { id, keywords } = response.data;
      const normalizedKeywords = normalize(keywords, keywordsListSchema).entities.keywords;
      dispatch(actions.successKeywords({ normalizedKeywords, id }));    
    });
};

export const fetchMoviesByKeyword = (page, id) => dispatch => {
  dispatch(actions.requestMoviesByKeyword());
  
  const url = `${BASIC_URL}keyword/${id}/movies?api_key=${API_KEY}&language=en-US&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      }); 
      const normalizedData = normalize(data, movieListSchema).entities.movies;
      dispatch(actions.successMoviesByKeyword({ normalizedData, id, total_pages })); 
    });

};