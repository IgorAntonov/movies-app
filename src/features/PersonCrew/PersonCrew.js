import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PersonCrewItem } from './PersonCrewItem';

export class PersonCrew extends Component {
  static propTypes = {
    crew: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = { showAll: false };

  render() {
    const { crew } = this.props;
    const { showAll } = this.state;
    const renderingCrew = showAll ? crew : crew.slice(0, 5);
    return (
      <div className="personList">
        <h3 className="personList__header">Crew</h3>
        <div className="personList__content">
          {renderingCrew.map(item => (
            <PersonCrewItem key={item.credit_id} {...item} />
          ))}
        </div>

        {!showAll && crew.length > 5 && (
          <button
            onClick={() => this.setState({ showAll: true })}
            className="personList__showButton"
            type="button"
          >
            Show all movies
          </button>
        )}
      </div>
    );
  }
}
