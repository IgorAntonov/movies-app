import React from 'react';
import PropTypes from 'prop-types';

import { CarouselSimilar } from './CarouselSimilar';
import { Keywords } from './Keywords';

export const DetailsSimilar = ({ keywords, similarMovies }) => (
  <div className="detailsSimilar">
    <h3 className="detailsSimilar__title">Similar movies</h3>
    {keywords.length && <Keywords keywords={keywords} />}
    {similarMovies.length && <CarouselSimilar slides={similarMovies} />}
    {!keywords.length && !similarMovies.length && (
      <p>Sorry, no similar movies here :( </p>
    )}
  </div>
);

DetailsSimilar.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.object).isRequired,
  similarMovies: PropTypes.arrayOf(PropTypes.object).isRequired
};
