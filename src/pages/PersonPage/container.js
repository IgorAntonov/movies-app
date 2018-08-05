import { connect } from 'react-redux';

import { PersonPage } from './PersonPage';
import { fetchPersonInfo } from '../../ducks/common';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    details: state.personDetails[id],
    cast: state.personCastCredits[id],
    crew: state.personCrewCredits[id]
  };
};

export const PersonPageContainer = connect(
  mapStateToProps,
  { fetchPersonInfo }
)(PersonPage);
