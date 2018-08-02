import React, { Component } from 'react';

import PersonCastItem from '../PersonCastItem';

export default class PersonCastList extends Component {
  constructor(props) {
    super(props);
    this.state = {showAll: false};
  }

  render() {
    const { cast } = this.props; 
    const { showAll } = this.state;
    const renderingCast = showAll ? cast : cast.slice(0, 5);
    return (
      <div className='personList'>
        <h3 className='personList__header'>Cast</h3>
        <div className='personList__content'>
          {renderingCast.map(item => <PersonCastItem key={item.credit_id} {...item} /> )}
        </div>

        {!showAll && cast.length > 5  &&
          <button 
            onClick={() => this.setState({showAll: true})} 
            className='personList__showButton'
          >
            Show all movies
          </button>
        }
      </div>
    );
  }
};

