import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import { LeftArrow, RightArrow } from '../../../ui/CarouselDecorators';
import { CarouselModal } from '../CarouselModal';

export class CarouselImages extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = {
    isModalOpen: false,
    urlForModal: null
  };

  openModalClick = urlForModal => this.setState({
    isModalOpen: true,
    urlForModal
  });

  closeModalClick = () => this.setState({
    isModalOpen: false,
    urlForModal: null
  });

  slides = () => {
    const { slides } = this.props;
    return slides.map(slide => (
      <div // eslint-disable-line
        key={slide.file_path}
        className="carousel__item"
        onClick={() => this.openModalClick(slide.file_path)}
      >
        <img
          alt="gallery_item"
          src={`https://image.tmdb.org/t/p/w185${slide.file_path}`}
        />
      </div>
    ));
  }

  render() {
    const { urlForModal, isModalOpen } = this.state;
    const settings = {
      slidesToScroll: 2,
      speed: 800,
      slideWidth: '185px',
      cellSpacing: 68,
      easing: 'easeCubicOut',
      edgeEasing: 'easePoly'
    };

    return (
      <div className="detailsMedia__images">
        <Carousel
          renderCenterLeftControls={({ currentSlide, previousSlide }) => (
            <LeftArrow
              currentSlide={currentSlide}
              previousSlide={previousSlide}
            />
          )}
          renderCenterRightControls={({
            currentSlide, previousSlide, nextSlide, slideCount
          }) => (
            <RightArrow
              currentSlide={currentSlide}
              previousSlide={previousSlide}
              nextSlide={nextSlide}
              slideCount={slideCount}
            />
          )}
          renderBottomCenterControls={() => {}}
          {...settings}
        >
          {this.slides()}
        </Carousel>

        {isModalOpen && (
          <CarouselModal
            urlForModal={urlForModal}
            closeModal={this.closeModalClick}
          />)}
      </div>
    );
  }
}
