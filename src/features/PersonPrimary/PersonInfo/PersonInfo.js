import React from 'react';
import PropTypes from 'prop-types';

export const PersonInfo = ({
  name, gender, birthday, birthPlace, deathday, imdbId
}) => (
  <div className="personPrimary__info">
    <div className="personPrimary__info__item">
      <p className="personPrimary__info__content">Name:</p>
      <p className="personPrimary__info__content">{name}{gender}</p>
    </div>
    <div className="personPrimary__info__item">
      <p className="personPrimary__info__content">Born:</p>
      <p className="personPrimary__info__content">
        <span>{birthday}</span>
        {birthPlace && <span>, ({birthPlace})</span>}
      </p>
    </div>
    {deathday && (
      <div className="personPrimary__info__item">
        <p className="personPrimary__info__content">Died:</p>
        <p className="personPrimary__info__content">{deathday}</p>
      </div>
    )}
    <div className="personPrimary__info__item">
      <p className="personPrimary__info__content">IMDb page:</p>
      <a
        href={`http://www.imdb.com/name/${imdbId}`}
        className="personPrimary__info__content personPrimary__info__content--ref"
      >
        {name}
      </a>
    </div>
  </div>
);

PersonInfo.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  deathday: PropTypes.string,
  birthPlace: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired
};

PersonInfo.defaultProps = {
  deathday: null
};
