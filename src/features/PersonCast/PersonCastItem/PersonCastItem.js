import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import noPoster from '../../../img/questionMark.png';
import { GENRES } from '../../../ducks/GENRES';

const formatDate = date => {
  if (!date) return null;
  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dateArr = date.split('-');
  const output = new Date(...dateArr);
  return formatter.format(output);
};

export const PersonCastItem = ({
  character, release_date, original_title,
  original_language, genre_ids, id,
  overview, poster_path
}) => (
  <div className="personCastItem">
    <Link to={`/movies/${id}`}>
      <div className="personCastItem__poster">
        {poster_path
          ? <img alt="poster" src={`https://image.tmdb.org/t/p/w92${poster_path}`} />
          : <img alt="poster" src={noPoster} />}
      </div>
    </Link>
    <div className="personCastItem__content">
      <div className="personCastItem__main">
        <div className="personCastItem__title">
          <Link to={`/movies/${id}`} className="personLink">
            <h4 className="personCastItem__header">{`${original_title} (${original_language})`}</h4>
          </Link>
          <p className="personCastItem__character">Character: {character}</p>
        </div>
        <div className="personCastItem__secondary">
          <p className="personCastItem__genres">
            {genre_ids.map(genreId => {
              const genre = GENRES.find(elem => elem.id === genreId).name;
              return (
                <Link
                  to={`/genres/${genreId}`}
                  key={genreId}
                  className="personLink"
                >
                  {`${genre} `}
                </Link>
              );
            })}
          </p>
          <p className="personCastItem__date">
            Release date: {formatDate(release_date)}
          </p>
        </div>
      </div>
      <p className="personCastItem__overview">{overview}</p>
    </div>
  </div>
);

PersonCastItem.propTypes = {
  character: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
};
