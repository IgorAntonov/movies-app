import React from 'react';
import PropTypes from 'prop-types';

import { CarouselImages } from './CarouselImages';
import { YoutubeVideo } from './YoutubeVideo';

export const DetailsMedia = ({ movieImages, movieVideos }) => (
  <div className="detailsMedia">
    <h3 className="detailsMedia__title">Gallery</h3>
    {movieImages.length && <CarouselImages slides={movieImages} />}
    {movieVideos.length && (
      <div className="detailsMedia__videos">
        <YoutubeVideo videos={movieVideos} />
      </div>)}
    {!movieImages.length && !movieVideos.length && (
      <p> Sorry, the gallery is empty :( </p>)}
  </div>
);

DetailsMedia.propTypes = {
  movieImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieVideos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
