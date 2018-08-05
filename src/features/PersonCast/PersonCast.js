import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PersonCastItem } from './PersonCastItem';

export class PersonCast extends Component {
  static propTypes = {
    cast: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = { showAll: false };

  render() {
    const { cast } = this.props;
    const { showAll } = this.state;
    const renderingCast = showAll ? cast : cast.slice(0, 5);
    return (
      <div className="personList">
        <h3 className="personList__header">Cast</h3>
        <div className="personList__content">
          {renderingCast.map(item => (
            <PersonCastItem key={item.credit_id} {...item} />
          ))}
        </div>

        {!showAll && cast.length > 5 && (
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
