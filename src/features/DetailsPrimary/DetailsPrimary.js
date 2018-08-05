import React from 'react';
import PropTypes from 'prop-types';

import { DetailsList } from './DetailsList';
import { CastCrew } from './CastCrew';
import noPoster from '../../img/noPosterFull.png';

export const DetailsPrimary = ({ details, primaryCast, primaryCrew }) => {
  const { overview, poster_path } = details;
  return (
    <div className="detailsPrimary">
      <div className="detailsPrimary__poster">
        {poster_path
          ? <img alt="poster" src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
          : <img alt="poster" src={noPoster} />}
      </div>

      <DetailsList details={details} />

      <CastCrew
        primaryCast={primaryCast}
        primaryCrew={primaryCrew}
      />

      <div className="detailsPrimary__overview">
        <h3 className="detailsPrimary__overview__title">
          Overview
        </h3>
        {overview
          ? <p className="detailsPrimary__overview__content">{overview}</p>
          : <p className="detailsPrimary__overview__content">No overview available</p>}
      </div>
    </div>
  );
};

DetailsPrimary.propTypes = {
  details: PropTypes.shape({}).isRequired,
  primaryCast: PropTypes.arrayOf(PropTypes.object).isRequired,
  primaryCrew: PropTypes.arrayOf(PropTypes.object).isRequired,
};
