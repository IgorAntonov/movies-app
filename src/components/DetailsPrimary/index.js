import React from 'react';

import DetailsPrimaryList from '../DetailsPrimaryList';
import DetailsCastAndCrew from '../DetailsCastAndCrew';
import noPoster from '../../img/noPosterFull.png';

const DetailsPrimary = ({ details, primaryCast, primaryCrew}) => {
  const { overview, poster_path } = details;

  return (
    <div className='detailsPrimary'>

      <div className='detailsPrimary__poster'>
      {
        poster_path
        ? <img alt='poster' src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>
        : <img alt='poster' src={noPoster}/>
      }  
      </div>

      <DetailsPrimaryList details={details} />

      <DetailsCastAndCrew 
        primaryCast={primaryCast}
        primaryCrew={primaryCrew}
      />

      <div className='detailsPrimary__overview'>
        <h3 className='detailsPrimary__overview__title'>Overview</h3>
        {overview 
          ? <p className='detailsPrimary__overview__content' >{overview}</p> 
          : <p className='detailsPrimary__overview__content'>No overview available</p>}  
      </div>
    </div>    
  );
};


export default DetailsPrimary;