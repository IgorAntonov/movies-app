/* eslint-disable */
import React, { Component } from 'react';

import { Icon } from '../Icon';

export class LeftArrow extends Component {
  shouldComponentUpdate() { 
    return this.props.currentSlide === 0;
  }

  render() {
    return (
      <button
        className={this.props.currentSlide === 0
          ? 'carousel__arrow carousel__arrow--left carousel__arrow--disabled'
          : 'carousel__arrow carousel__arrow--left'}         
        onClick={this.props.previousSlide}
        >
        <div className='carousel__icon'>
          <Icon icon='arrowLeft' width='40' height='40'/>
        </div>
    </button>
    );
  }
}
