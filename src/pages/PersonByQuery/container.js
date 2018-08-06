import { connect } from 'react-redux';

import { PersonByQuery } from './PersonByQuery';
import {
  fetchPersonByQuery,
  getPersonsArray
} from '../../ducks/person-by-query';

const mapStateToProps = (state, { match }) => ({
  persons: getPersonsArray(state.personByQuery[match.params.query]),
  fetching: state.personByQuery.fetching,
  totalPages: state.personByQuery.currentTotalPages
});

export const ConnectedPersonByQuery = connect(
  mapStateToProps,
  { fetchPersons: fetchPersonByQuery }
)(PersonByQuery);
