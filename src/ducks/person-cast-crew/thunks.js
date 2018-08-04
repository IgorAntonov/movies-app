import axios from 'axios';
import _ from 'lodash';

import { actions } from './actions';
import { BASIC_URL, API_KEY } from '../../constants/api';

export const fetchPersonCredits = id => dispatch => {
  dispatch(actions.requestPersonCredits());

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

      dispatch(actions.successPersonCredits({ id, cast, resultCrew }));
    });
}
