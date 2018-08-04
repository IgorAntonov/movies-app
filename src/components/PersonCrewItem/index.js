import React from 'react';
import { Link } from 'react-router-dom';

import noPoster from '../../img/questionMark.png';
import { GENRES } from '../../ducks/GENRES';

const PersonCrewItem = props => {

  const {id, original_language, 
    original_title, job, overview, poster_path, 
    genre_ids, release_date} = props;

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
    <div className='personCrewItem' >
      <Link to={`/movies/${id}`} >
        <div className='personCastItem__poster'>
          {
            poster_path
            ? <img alt='poster' src={`https://image.tmdb.org/t/p/w92${poster_path}`}/>
            : <img alt='poster' src={noPoster}/>
          } 
        </div>
      </Link>

      <div className='personCrewItem__content'>
        <div className='personCrewItem__main'>
          <div className='personCrewItem__title'>
            <Link to={`/movies/${id}`} className='personLink' >
              <h4 className='personCrewItem__header'>{`${original_title} (${original_language})`}</h4>
            </Link>
            <p className='personCrewItem__job'>{job}</p>
          </div>
          <div className='personCrewItem__secondary'>
            {renderGenres()}
            <p className='personCrewItem__date'>Release date: {renderDate(release_date)}</p>
          </div>
        </div>
        <p className='personCrewItem__overview'>{overview}</p>
      </div>
    </div>
  );
};

export default PersonCrewItem;