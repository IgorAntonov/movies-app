import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const DetailsRecommendations = ({ id }) => (
  <div className="detailsRecommendations">
    <p className="detailsRecommendations__text">
      <span>Would you like to see </span>
      <Link to={`/recommendations/${id}`} className="detailsRecommendations__link">
        <span className="detailsRecommendations__ref">
          recommendations
        </span>
      </Link>
      <span>?</span>
    </p>
  </div>
);

DetailsRecommendations.propTypes = {
  id: PropTypes.string.isRequired
};
