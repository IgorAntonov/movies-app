import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CastCrew = ({ primaryCrew, primaryCast }) => (
  <div className="castAndCrew">
    <div className="castAndCrew__crew">
      {primaryCrew.map(member => (
        <Link to={`/person/${member.id}`} key={member.credit_id} className="primaryListLink">
          <div className="crewItem">
            <h5 className="crewItem__name">{member.name}</h5>
            <p className="crewItem__job">{member.job}</p>
          </div>
        </Link>
      ))}
    </div>
    <div className="castAndCrew__cast">
      {primaryCast.map(member => (
        <Link to={`/person/${member.id}`} key={member.credit_id} className="primaryListLink">
          <div className="castItem">
            <h5 className="castItem__name">{member.name}</h5>
            <p className="castItem__character">{member.character}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

CastCrew.propTypes = {
  primaryCast: PropTypes.arrayOf(PropTypes.object).isRequired,
  primaryCrew: PropTypes.arrayOf(PropTypes.object).isRequired
};
