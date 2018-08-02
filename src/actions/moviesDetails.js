import axios from 'axios';
import { normalize } from 'normalizr';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { detailsSchema } from '../schemas/details';

export const fetchDetails = (id) => (dispatch) => {
  dispatch(requestDetails());

  const url = `${BASIC_URL}movie/${id}?api_key=${API_KEY}&language=en-Us`;

  return axios.get(url)
    .then(response => {
      const { data } = response;     
      const normalizedData = normalize(data, detailsSchema).entities.details;   
      dispatch(receiveDetails(normalizedData));
    });
  

}

const requestDetails = () => ({
  type: actions.DETAILS_REQUESTED
});

const receiveDetails = (data) => ({
  type: actions.DETAILS_RECEIVED,
  payload: data
});