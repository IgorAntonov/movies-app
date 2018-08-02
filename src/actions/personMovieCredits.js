import axios from 'axios';
import _ from 'lodash';

import { BASIC_URL, API_KEY } from '../constants//api';
import * as actions from '../constants/actionTypes';


export const fetchPersonCredits = id => dispatch => {
  dispatch(requestPersonCredits());

  const url = `${BASIC_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
  return axios.get(url)
    .then(response => {
      const { cast, crew } = response.data;

      let uniqId = [];
      let resultCrew = [];
      
      crew.forEach((item, index) => {
        if (uniqId.find(element => element===item.id)) {
          const indexElem = _.findIndex(resultCrew, {'id':item.id});
          resultCrew[indexElem].job += `, ${item.job}`;
        } else {
          uniqId.push(item.id);
          resultCrew.push(item);
        };
      });

      dispatch(receivePersonCredits(id, cast, resultCrew));
    });
}

const requestPersonCredits = () => ({
  type: actions.PERSON_MOVIE_CREDITS_REQUESTED,
  fetching: true
});

const receivePersonCredits = (id, cast, crew) => ({
  type: actions.PERSON_MOVIE_CREDITS_RECEIVED,
  id,
  cast,
  crew,
  fetching: false
});