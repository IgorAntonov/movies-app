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

export const PersonCrewItem = ({
  id, original_language, original_title,
  job, overview, poster_path, genre_ids, release_date
}) => (
  <div className="personCrewItem">
    <Link to={`/movies/${id}`}>
      <div className="personCastItem__poster">
        {poster_path
          ? <img alt="poster" src={`https://image.tmdb.org/t/p/w92${poster_path}`} />
          : <img alt="poster" src={noPoster} />
        }
      </div>
    </Link>

    <div className="personCrewItem__content">
      <div className="personCrewItem__main">
        <div className="personCrewItem__title">
          <Link to={`/movies/${id}`} className="personLink">
            <h4 className="personCrewItem__header">
              {`${original_title} (${original_language})`}
            </h4>
          </Link>
          <p className="personCrewItem__job">{job}</p>
        </div>
        <div className="personCrewItem__secondary">
          <p className="personCastItem__genres">
            {genre_ids.map(genreId => {
              const genre = GENRES.find(elem => elem.id === genreId).name;
              return (
                <Link to={`/genres/${genreId}`} key={genreId} className="personLink">
                  {`${genre} `}
                </Link>
              );
            })}
          </p>
          <p className="personCrewItem__date">
            Release date: {formatDate(release_date)}
          </p>
        </div>
      </div>
      <p className="personCrewItem__overview">{overview}</p>
    </div>
  </div>
);

PersonCrewItem.propTypes = {
  id: PropTypes.number.isRequired,
  original_language: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  release_date: PropTypes.string.isRequired
};

PersonCrewItem.defaultProps = {
  poster_path: null
};
