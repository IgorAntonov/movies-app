import axios from 'axios';
import _ from 'lodash';
import { normalize } from 'normalizr';

import { API_KEY, BASIC_URL } from '../constants/api';
import * as actions from '../constants/actionTypes';
import { personListSchema } from '../schemas/personByQuery';

export const fetchPersonByQuery = (page, query) => dispatch => {
  dispatch(requestPersonByQuery());

  const url = `${BASIC_URL}search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { total_pages, results } = response.data;
      const data = results.map(result => {
        return _.omit(result, 'known_for');
      });
      const normalizedData = normalize(data, personListSchema).entities.persons;
      dispatch(receivePersonByQuery(normalizedData, total_pages, query));
    });
};

const requestPersonByQuery = () => ({
  type: actions.PERSONS_REQUESTED,
  fetching: true
});

const receivePersonByQuery = (data, totalPages, query) => ({
  type: actions.PERSONS_RECEIVED,
  data,
  totalPages,
  query,
  fetching: false
});