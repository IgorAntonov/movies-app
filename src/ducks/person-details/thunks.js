import axios from 'axios';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';

export const fetchPersonDetails = id => dispatch => {
  dispatch(actions.requestPersonDetails());
  const url = `${BASIC_URL}person/${id}?api_key=${API_KEY}&language=en-US`;
  return axios.get(url)
    .then(response => {
      const { data } = response;
      dispatch(actions.successPersonDetails({ id, data }));
    });
};
