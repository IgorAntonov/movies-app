import React from 'react';
import { Link } from 'react-router-dom';

import noPoster from '../../img/questionMark.png';
import { GENRES } from '../../constants/other';

const PersonCastItem = props => {
  const {character, release_date, original_title, 
    original_language, genre_ids, id, 
    overview, poster_path} = props;

  const renderDate = date => {
    if(!date) return;
    const formatter = new Intl.DateTimeFormat('en', {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const dateArr = date.split('-');
    const output = new Date(...dateArr);
    return formatter.format(output);
  };

  const renderGenres = () => {
    return (
      <p className='personCastItem__genres'>
        {genre_ids.map(id => {
          const genre = GENRES.find(elem => {
            return elem.id === id;
          }).name;

          return <Link to={`/genres/${id}`} key={id} className='personLink' >{genre} </Link>
        })}
      </p>
    );
  };

  return (
    <div className='personCastItem'>
      <Link to={`/movies/${id}`} >
        <div className='personCastItem__poster'>
          {
            poster_path
            ? <img alt='poster' src={`https://image.tmdb.org/t/p/w92${poster_path}`}/>
            : <img alt='poster' src={noPoster}/>
          } 
        </div>
      </Link>
      <div className='personCastItem__content'>
        <div className='personCastItem__main'>
          <div className='personCastItem__title'>
            <Link to={`/movies/${id}`} className='personLink'>
              <h4 className='personCastItem__header'>{`${original_title} (${original_language})`}</h4>
            </Link>
            <p className='personCastItem__character'>Character: {character}</p>
          </div>
          <div className='personCastItem__secondary'>
            {renderGenres()}
            <p className='personCastItem__date'>Release date: {renderDate(release_date)}</p>
          </div>
        </div>
        <p className='personCastItem__overview'>{overview}</p>
      </div>
    </div>
  );
};

export default PersonCastItem;



