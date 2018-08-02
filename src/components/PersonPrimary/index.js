import React from 'react';

import noPoster from '../../img/noPosterFull.png';

const PersonPrimary = ({ details }) => {
  const { birthday, deathday, name, gender, biography, 
    place_of_birth, profile_path, imdb_id } = details;

  const renderDate = date => {
    const formatter = new Intl.DateTimeFormat('en', {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const dateArr = date.split('-');
    const output = new Date(...dateArr);
    return formatter.format(output);
  }; 
  const renderName = () => {
    let sex = null;
    if (gender === 1) {
      sex = ' (female)'
    } else if (gender === 2) sex = ' (male)';

    return (
      <div className='personPrimary__info__item'>
        <p className='personPrimary__info__content'>Name:</p>
        <p className='personPrimary__info__content'>{name}{sex}</p>
      </div>
    );
  }
  const renderBirth = () => {
    if (!birthday) return;
    return (
      <div className='personPrimary__info__item'>
        <p className='personPrimary__info__content'>Born:</p>
        <p className='personPrimary__info__content'>  
          <span>{renderDate(birthday)}, </span>
          <span>({place_of_birth})</span>
        </p>
      </div>
    );
  };
  const renderDeath = () => {
    if (!deathday) return;
    return (
      <div className='personPrimary__info__item'>
        <p className='personPrimary__info__content'>Died:</p>
        <p className='personPrimary__info__content'>{renderDate(deathday)}</p>
      </div>
    );
  };
  const renderIMDb = () => {
    if (!imdb_id) return;
    return (
      <div className='personPrimary__info__item'>
        <p className='personPrimary__info__content'>IMDb page:</p>
        <a href={`http://www.imdb.com/name/${imdb_id}`} 
          className='personPrimary__info__content personPrimary__info__content--ref'
        >
          {name}
        </a>
      </div>
    );
  };


  return (
    <div className='personPrimary'>
      <div className='personPrimary__poster'>
        {
          profile_path
          ? <img alt='poster' src={`https://image.tmdb.org/t/p/w185${profile_path}`}/>
          : <img alt='poster' src={noPoster}/>
        }  
      </div>
      <div className='personPrimary__info'>
        {renderName()}
        {renderBirth()}
        {renderDeath()}
        {renderIMDb()}       
      </div>    
      {biography !== '' 
        ? <p className='personPrimary__biography' >{biography}</p>
        : null    
      }
    </div>
  );
};

export default PersonPrimary;