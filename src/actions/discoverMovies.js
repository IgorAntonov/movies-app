import axios from 'axios';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { movieListSchema } from '../schemas/movies';
import { BASIC_DISCOVER_URL } from '../constants/api';
import * as actions from '../constants/actionTypes';

export const fetchDiscoverMovies = (sort, date, cert, genres, page) => dispatch => {
  dispatch(requestDiscoverMovies());

  const url = `${BASIC_DISCOVER_URL}&page=${page}&sort_by=${sortBy(sort)}&${releaseDate(date)}${certification(cert)}${withGenres(genres)}`;
  
  return axios.get(url)
    .then(response => {
      const { results, total_pages } = response.data;
      const data = results.map(result => {
        return _.omit(result, ['genre_ids', 'vote_count', 'video', 'adult']);
      });
      const normalizedData = normalize(data, movieListSchema).entities.movies;
      const cuttedUrl = `${sort}${date}${cert}${genres}`;

      dispatch(receiveDiscoverMovies(normalizedData, total_pages, cuttedUrl));
    })
};

const requestDiscoverMovies = () => ({
  type: actions.DISCOVER_MOVIES_REQUESTED,
  fetching: true
});

const receiveDiscoverMovies = (data, totalPages, cuttedUrl) => ({
  type: actions.DISCOVER_MOVIES_RECEIVED,
  data,
  totalPages,
  cuttedUrl,
  fetching: false
});


const sortBy = sort => {
  switch (sort) {
    case 'popularity_up':
      return 'popularity.desc';
    case 'popularity_down':
      return 'popularity.asc';
    case 'release date_up':
      return 'primary_release_date.desc';
    case 'release date_down':
      return 'primary_release_date.asc';
    case 'rating_up':
      return 'vote_average.desc';
    case 'rating_down':
      return 'vote_average.asc';
    case 'alphabet_up':
      return 'original_title.asc&with_original_language=en';
    case 'alphabet_down':
      return 'original_title.desc&with_original_language=en';
    default:
      return ''
  }
};
const releaseDate = date => {
  return date.length === 4 ? 
    `primary_release_year=${date}` :
    `primary_release_date.gte=${date.slice(0, 4)}&primary_release_date.lte=${date.slice(5)}`;     
};
const certification = cert => {
  if (cert === 'all') return '';
  const method = cert.includes('exact') ? 'certification' : 'certification.lte';
  const rating = cert.split('_')[0].toUpperCase();
  return `&${method}=${rating}`;
};
const withGenres = genres => {
  if (genres === 'all') return '';
  return `&with_genres=${genres.replace(/-/g, '|')}`;
};
