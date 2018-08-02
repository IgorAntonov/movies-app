import axios from 'axios';
import { normalize } from 'normalizr';

import * as actions from '../constants/actionTypes';
import { API_KEY, BASIC_URL } from '../constants/api';
import { castSchema, crewSchema } from '../schemas/castAndCrew';


export const fetchCastAndCrew = (id) => (dispatch) => {
  dispatch(requestCastAndCrew());

  const url = `${BASIC_URL}movie/${id}/credits?api_key=${API_KEY}`;

  return axios.get(url)
    .then(response => {
      const {cast, crew, id} = response.data;
     
      const normalizedCast = normalize(cast, castSchema).entities.cast;
      const normalizedCrew = normalize(crew, crewSchema).entities.crew;
      
      
      dispatch(receiveCastAndCrew(normalizedCast, normalizedCrew, id));
    });
  

}

const requestCastAndCrew = () => ({
  type: actions.CAST_CREW_REQUESTED
});

const receiveCastAndCrew = (cast, crew, id) => ({
  type: actions.CAST_CREW_RECEIVED,
  cast,
  crew,
  id
});
