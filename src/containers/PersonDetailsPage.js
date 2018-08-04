import { connect } from 'react-redux';

import PersonDetailsPage from '../components/PersonDetailsPage';
import { fetchPersonDetails } from '../ducks/person-details';
import { fetchPersonCredits } from '../ducks/person-cast-crew';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    details: state.personDetails[id],
    cast: state.personCastCredits[id],
    crew: state.personCrewCredits[id] 
  };
};

export default connect(mapStateToProps, { fetchPersonDetails, fetchPersonCredits })(PersonDetailsPage);