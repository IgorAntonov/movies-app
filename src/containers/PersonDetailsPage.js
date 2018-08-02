import { connect } from 'react-redux';

import PersonDetailsPage from '../components/PersonDetailsPage';
import { fetchPersonDetails } from '../actions/personDetails';
import { fetchPersonCredits } from '../actions/personMovieCredits';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    details: state.personDetails[id],
    cast: state.personCastCredits[id],
    crew: state.personCrewCredits[id] 
  };
};

export default connect(mapStateToProps, { fetchPersonDetails, fetchPersonCredits })(PersonDetailsPage);