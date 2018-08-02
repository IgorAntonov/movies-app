import axios from 'axios';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';


export const fetchPersonDetails = id => dispatch => {
  dispatch(requestPersonDetails());
  
  const url = `${BASIC_URL}person/${id}?api_key=${API_KEY}&language=en-US`;
  return axios.get(url)
    .then(response => {
      const { data } = response;
      

      dispatch(receivePersonDetails(id, data));
    });
};




const requestPersonDetails = () => ({
  type: actions.PERSON_DETAILS_REQUESTED,
  fetching: true
});

const receivePersonDetails = (id, data) => ({
  type: actions.PERSON_DETAILS_RECEIVED,
  id,
  data,
  fetching: false
});