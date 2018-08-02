import React from 'react';
import { Link } from 'react-router-dom';

const DetailsRecomendations = ({ id }) => {
  return (
    <div className='detailsRecommendations' >
      <p className='detailsRecommendations__text' >
        <span>Would you like to see </span>
        <Link to={`/recommendations/${id}`} className='detailsRecommendations__link'>
          <span className='detailsRecommendations__ref'>recommendations</span>
        </Link>
        <span>?</span>
      </p>        
    </div>
  );
}

export default DetailsRecomendations;