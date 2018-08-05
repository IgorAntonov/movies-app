import { fetchPersonDetails } from '../person-details';
import { fetchPersonCredits } from '../person-cast-crew';

export const fetchPersonInfo = (personId, cb) => async dispatch => {
  await Promise.all([
    dispatch(fetchPersonCredits(personId)),
    dispatch(fetchPersonDetails(personId))
  ]);
  cb();
};
