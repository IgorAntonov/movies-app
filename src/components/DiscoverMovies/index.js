import React, { Component } from 'react';

import DiscoverForm from '../DiscoverForm';

export default class DiscoverMovies extends Component {

  render() {
    return <div className='discover'>
      <h2 className='discover__title'>Discover every movie, that you want!</h2>
      <div className='discover__formWrapper'>
        <DiscoverForm />
      </div>
    </div>
  }
};