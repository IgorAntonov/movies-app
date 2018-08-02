import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import CarouselDecorators from '../CarouselDecorators';
import CarouselModal from '../CarouselModal';

export default class CarouselImages extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      urlForModal: null
    };

    this.closeModalClick = this.closeModalClick.bind(this);
  }

  openModalClick(urlForModal) {
    this.setState({
      isModalOpen: true,
      urlForModal
    });
  }
  
  closeModalClick() {
    this.setState({
      isModalOpen: false,
      urlForModal: null
    })
  }

  renderSlides() {
    const { slides } = this.props;
    return slides.map(slide => {
      return (
        <div 
          key={slide.file_path} 
          className='carousel__item' 
          onClick={() => this.openModalClick(slide.file_path)} 
        >
          <img      
            alt='gallery item' 
            src={`https://image.tmdb.org/t/p/w185${slide.file_path}`}
          />
        </div>
      )}
    ); 
  } 
 
  render() {
    const { urlForModal, isModalOpen } = this.state;

    const settings = {
      slidesToScroll: 2,
      speed: 800,
      slideWidth: '185px',
      cellSpacing: 68,
      easing: 'easeInSine',
      edgeEasing: 'easeOutBounce',
      dragging: true,  
    }


    return (
      <div>
        <Carousel decorators={CarouselDecorators} {...settings} >
          {this.renderSlides()}
        </Carousel>
        {isModalOpen && <CarouselModal urlForModal={urlForModal} closeModal={this.closeModalClick} />}
      </div>
        
        
    ); 
  }  
}


