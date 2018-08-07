/* eslint-disable */
import React, { Component } from 'react';

import { Icon } from '../Icon';

export class RightArrow extends Component {
  shouldComponentUpdate() { 
    return this.props.currentSlide === this.props.slideCount - 1; 
  }

  render() {
    return (
      <button
        className={this.props.currentSlide === this.props.slideCount - 1 
          ? 'carousel__arrow carousel__arrow--right carousel__arrow--disabled'
          : 'carousel__arrow carousel__arrow--right'
        }   
        onClick={this.props.nextSlide}
      >
        <div className='carousel__icon'>
          <Icon icon='arrowRight' width='40' height='40'/>
        </div>
      </button>
    );
  }
}
