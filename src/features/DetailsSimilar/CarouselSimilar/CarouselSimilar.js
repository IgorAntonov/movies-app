import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';

import { LeftArrow, RightArrow } from '../../../ui/CarouselDecorators';

export const CarouselSimilar = ({ slides }) => {
  const settings = {
    slidesToScroll: 2,
    speed: 800,
    slideWidth: '185px',
    cellSpacing: 68,
    easing: 'easeCubicOut',
    edgeEasing: 'easePoly'
  };

  const renderSlides = slides.map(slide => (
    <div key={slide.id} className="carouselSimilarMoviesItem">
      <Link to={`/movies/${slide.id}`} className="carouselSimilarMoviesItem__link">
        <p className="carouselSimilarMoviesItem__title">
          {slide.title}
        </p>
        <div className="carouselSimilarMoviesItem__image">
          <img
            alt="poster"
            src={`https://image.tmdb.org/t/p/w185${slide.backdrop_path}`}
          />
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="detailsSimilar__moviesList">
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
        {renderSlides}
      </Carousel>
    </div>
  );
};

CarouselSimilar.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired
};
