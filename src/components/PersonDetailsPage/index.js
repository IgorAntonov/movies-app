import React, { Component } from 'react';

import PersonPrimary from '../PersonPrimary';
import PersonCastList from '../PersonCastList';
import PersonCrewList from '../PersonCrewList';
import LoadingSpinner from '../LoadingSpinner';

export default class PersonDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {rendering: false};
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    (async () => {
      await Promise.all([
        this.props.fetchPersonDetails(id),
        this.props.fetchPersonCredits(id)
      ])
      this.setState({ rendering: true });
    })();

  };

  renderPage() {
    const { details, cast, crew } = this.props;
    return (
      <div className='personDetails'>
        <PersonPrimary details = {details} />
        {cast.length > 0 && <PersonCastList cast={cast} />}
        {crew.length > 0 && <PersonCrewList crew={crew} />}
      </div>
      
    );
  }

  renderLoading() {
    return (
      <div className='detailsSpinnerWrapper' >
        <LoadingSpinner />
      </div>
    );
  }

  render() {   
    return this.state.rendering ? this.renderPage() : this.renderLoading();
  }
};
