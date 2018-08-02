import React from 'react';

import Icon from '../Icon';

export default [
  {
    component: class LeftArrow extends React.Component {

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
    },
    position: 'CenterLeft',
    style: {
      width: '50px',
      height: '50px',
      left: '-5%'
    }
  }, 
  
  {
    component: class RightArrow extends React.Component {

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
    },
    position: 'CenterRight',
    style: {
      width: '50px',
      height: '50px',
      right: '-5%'
    }

  }
];