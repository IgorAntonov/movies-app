import { connect } from 'react-redux';

import PersonByQuery from '../components/PersonByQuery';
import { fetchPersonByQuery, getPersonsArray } from '../ducks/person-by-query';

const mapStateToProps =(state, ownProps) => ({
  persons: getPersonsArray(state.personByQuery[ownProps.match.params.query]),
  fetching: state.personByQuery.fetching,
  totalPages: state.personByQuery.currentTotalPages
});

export default connect(mapStateToProps, { fetchPersons: fetchPersonByQuery })(PersonByQuery);