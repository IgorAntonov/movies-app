import * as actions from '../constants/actionTypes';
import _ from 'lodash';



const genreMovies = (state = { fetching: false }, action) => {
  switch (action.type) {
    case actions.GENRE_MOVIES_REQUESTED:   
      return {...state, fetching: action.fetching};
    
    case actions.GENRE_MOVIES_RECEIVED:
      return {...state, [action.id]: {...state[action.id], ...action.data}, 
        fetching: action.fetching, totalPages: action.totalPages
      }
    default:
      return state;
  }
}

export default genreMovies;


///////////////////selectors////////////////////////


export const getGenreMoviesArray = (movies) => {
  const unsorted = _.values(movies);
  return _.sortBy(unsorted, 'popularity').reverse();
};