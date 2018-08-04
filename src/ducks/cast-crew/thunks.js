import axios from 'axios';
import { normalize } from 'normalizr';

import { actions } from './actions';
import { API_KEY, BASIC_URL } from '../api-constants';
import { castSchema, crewSchema } from './schema';


export const fetchCastAndCrew = movieId => dispatch => {
  dispatch(actions.requestCastCrew());
  const url = `${BASIC_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  return axios.get(url)
    .then(response => {
      const { cast, crew, id } = response.data;
      const normalizedCast = normalize(cast, castSchema).entities.cast;
      const normalizedCrew = normalize(crew, crewSchema).entities.crew;

      dispatch(actions.successCastCrew({
        cast: normalizedCast,
        crew: normalizedCrew,
        id
      }));
    });
};
