import React, { Component } from 'react';


import PersonCrewItem from '../PersonCrewItem';

export default class PersonCrewList extends Component {
  constructor(props) {
    super(props);
    this.state = {showAll: false};
  }

  render() {
    const { crew } = this.props; 
    const { showAll } = this.state;
    const renderingCrew = showAll ? crew : crew.slice(0, 5);
    return (
      <div className='personList'>
        <h3 className='personList__header'>Crew</h3>
        <div className='personList__content'>
          {renderingCrew.map(item => <PersonCrewItem key={item.credit_id} {...item} /> )}
        </div>

        {!showAll && crew.length > 5 &&
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
