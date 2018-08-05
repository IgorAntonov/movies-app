import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PersonPrimary } from '../../features/PersonPrimary';
import { PersonCast } from '../../features/PersonCast';
import PersonCrewList from '../../components/PersonCrewList';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export class PersonPage extends Component {
  static propTypes = {
    fetchPersonInfo: PropTypes.func.isRequired,
    details: PropTypes.shape({}),
    cast: PropTypes.arrayOf(PropTypes.object),
    crew: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      }),
    }).isRequired,
  }

  static defaultProps = {
    details: {},
    cast: [],
    crew: []
  }

  state = { rendering: false };

  componentDidMount() {
    const { match, fetchPersonInfo } = this.props;
    const cb = () => this.setState({ rendering: true });
    fetchPersonInfo(match.params.id, cb);
  }

  render() {
    const { rendering } = this.state;
    const { details, cast, crew } = this.props;
    if (!rendering) {
      return (
        <div className="detailsSpinnerWrapper">
          <LoadingSpinner />
        </div>
      );
    }
    return (
      <div className="personDetails">
        <PersonPrimary details={details} />
        {cast.length > 0 && <PersonCast cast={cast} />}
        {crew.length > 0 && <PersonCrewList crew={crew} />}
      </div>
    );
  }
}
