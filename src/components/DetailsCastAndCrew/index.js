import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCastAndCrew = ({primaryCrew, primaryCast}) => {

  
  const renderPrimaryCrew = primaryCrew.map(member => {
    return (
      <Link to={`/person/${member.id}`} key={member.credit_id} className='primaryListLink' >
        <div className='crewItem'>   
          <h5 className='crewItem__name'>{member.name}</h5>     
          <p className='crewItem__job'>{member.job}</p>  
        </div>        
      </Link>
    );
  });

  const renderPrimaryCast = primaryCast.map(member => {
    return (
      <Link to={`/person/${member.id}`} key={member.credit_id} className='primaryListLink' >
        <div className='castItem' >   
          <h5 className='castItem__name'>{member.name}</h5>    
          <p className='castItem__character'>{member.character}</p> 
        </div>       
      </Link>
    );
  });

  return (
    <div className='castAndCrew'>    
      <div className='castAndCrew__crew'>{renderPrimaryCrew} </div>
      <div className='castAndCrew__cast'>{renderPrimaryCast} </div>      
    </div>
  );
}

export default DetailsCastAndCrew;