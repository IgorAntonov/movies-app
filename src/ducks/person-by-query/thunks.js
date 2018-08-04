import axios from 'axios';
import { omit } from 'lodash';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { personListSchema } from './schema';

export const fetchPersonByQuery = (page, query) => dispatch => {
  dispatch(actions.requestPersons());
  const url = `${BASIC_URL}search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
  return axios.get(url)
    .then(response => {
      const { total_pages, results } = response.data;
      const data = results.map(result => omit(result, 'known_for'));
      const { persons } = normalize(data, personListSchema).entities;
      dispatch(actions.successPersons({
        persons,
        total_pages,
        query
      }));
    });
};
