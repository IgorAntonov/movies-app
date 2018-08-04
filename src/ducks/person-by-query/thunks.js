import axios from 'axios';
import _ from 'lodash';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../../constants/api';
import { personListSchema } from '../../schemas/personByQuery';

export const fetchPersonByQuery = (page, query) => dispatch => {
  dispatch(actions.requestPersons());

  const url = `${BASIC_URL}search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;

  return axios.get(url)
    .then(response => {
      const { total_pages, results } = response.data;
      const data = results.map(result => {
        return _.omit(result, 'known_for');
      });
      const normalizedData = normalize(data, personListSchema).entities.persons;
      dispatch(actions.successPersons({ normalizedData, total_pages, query }));
    });
};
