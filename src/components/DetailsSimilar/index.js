import React from 'react';
import { Link } from 'react-router-dom';

import CarouselSimilarMovies from '../CarouselSimilarMovies';

const DetailsSimilar = ({ keywords, similarMovies }) => {
  
  const renderKeywords = () => {
    
    if (keywords.length) {

      const renderKeywordsList = keywords.map(keyword => {
        return <Link
          className='detailsSimilar__keywords__ref' 
          key={keyword.id} 
          to={`/keyword/${keyword.name}/${keyword.id}`}
        >
          {keyword.name}
        </Link>
      });

      return (
        <div className='detailsSimilar__keywords'>
          <h5 className='detailsSimilar__keywords__title'>Keywords</h5>
          <div className='detailsSimilar__keywords__list'>
            {renderKeywordsList}
          </div>
        </div>
      ); 

    };
  };
  
  const renderSimilar = () => {
    if (similarMovies.length) {
      return (
        <div className='detailsSimilar__moviesList'>
          <CarouselSimilarMovies slides={similarMovies}/>
        </div>
      );
    };
  };

  const renderNoItems = () => {
    if (!keywords.length && !similarMovies.length) {
      return <p>Sorry, no similar movies here :( </p>
    };
  };

  return (
    <div className='detailsSimilar' >
      <h3 className='detailsSimilar__title'>Similar movies</h3> 
      {renderKeywords()}
      {renderSimilar()}
      {renderNoItems()}
    </div>
  );
}

export default DetailsSimilar;