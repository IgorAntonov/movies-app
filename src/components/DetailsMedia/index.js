import React from 'react';

import CarouselImages from '../CarouselImages';
import YoutubeVideo from '../YoutubeVideo';

const DetailsMedia = ({ movieImages, movieVideos }) => {
  
  const renderImages = () => {
    if (movieImages.length) {
      return (
        <div className='detailsMedia__images'>
          <CarouselImages slides={movieImages}/>
        </div>
      );
    };
  };

  const renderVideos = () => {
    if (movieVideos.length) {
      return (
        <div className='detailsMedia__videos'>
          <YoutubeVideo videos={movieVideos}/>    
        </div> 
      );
    };
  };

  const renderNoItems = () => {
    if (!movieImages.length && !movieVideos.length)  {
      return (
        <p> Sorry, the gallery is empty :( </p>
      );
    };
  };

  return (
    <div className='detailsMedia'> 
      <h3 className='detailsMedia__title'>Gallery</h3>
      {renderImages()}
      {renderVideos()}
      {renderNoItems()}   
    </div>
  );
}

export default DetailsMedia;