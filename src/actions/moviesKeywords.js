import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { keywordsListSchema } from '../schemas/keywords';
import { movieListSchema } from '../schemas/movies';

export const fetchKeywords = id => dispatch => {
  dispatch(requestKeywords());

  const url = `${BASIC_URL}movie/${id}/keywords?api_key=${API_KEY}`;

  return axios.get(url)
    .then(response => {
      const { id, keywords } = response.data;
      const normalizedKeywords = normalize(keywords, keywordsListSchema).entities.keywords;
      dispatch(receiveKeywords(normalizedKeywords, id));    
    });
};

const requestKeywords = () => ({
  type: actions.KEYWORDS_REQUESTED
});

const receiveKeywords = (keywords, id) => ({
  type: actions.KEYWORDS_RECEIVED,
  keywords,
  id
});


export const fetchMoviesByKeyword = (page, id) => dispatch => {
  dispatch(requestMoviesByKeyword());
  
  const url = `${BASIC_URL}keyword/${id}/movies?api_key=${API_KEY}&language=en-US&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'vote_average', 'video', 'adult']);
      }); 
      const normalizedData = normalize(data, movieListSchema).entities.movies;
      dispatch(receiveMoviesByKeyword(normalizedData, id, total_pages)); 
    });

};

const requestMoviesByKeyword = () => ({
  type: actions.MOVIES_BY_KEYWORD_REQUESTED,
  fetching: true
});

const receiveMoviesByKeyword = (movies, id, totalPages) => ({
  type: actions.MOVIES_BY_KEYWORD_RECEIVED,
  movies,
  id,
  totalPages,
  fetching: false
});
