import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';


const CarouselSimilarMovies = ({ slides }) =>{
  
  const settings = {
    slidesToScroll: 2,
    speed: 800,
    slideWidth: '185px',
    cellSpacing: 68,
    easing: 'easeInSine',
    edgeEasing: 'easeOutBounce',
    dragging: true,
    
  }

  const renderSlides = slides.map(slide => {
    return (
      <div key={slide.id} className='carouselSimilarMoviesItem'>
        <Link to={`/movies/${slide.id}`} className='carouselSimilarMoviesItem__link'>
          <p className='carouselSimilarMoviesItem__title'>{slide.title}</p>
          <div className='carouselSimilarMoviesItem__image'>
            <img alt='poster' src={`https://image.tmdb.org/t/p/w185${slide.backdrop_path}`} />
          </div>
        </Link>
      </div>
    );
  }); 
 
  return ( 
    <Carousel {...settings} >
      {renderSlides}
    </Carousel>
  );  
}

export default CarouselSimilarMovies;

