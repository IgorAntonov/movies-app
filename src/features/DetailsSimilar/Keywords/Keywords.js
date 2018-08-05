import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Keywords = ({ keywords }) => (
  <div className="detailsSimilar__keywords">
    <h5 className="detailsSimilar__keywords__title">
      Keywords
    </h5>
    <div className="detailsSimilar__keywords__list">
      {keywords.map(keyword => (
        <Link
          className="detailsSimilar__keywords__ref"
          key={keyword.id}
          to={`/keyword/${keyword.name}/${keyword.id}`}
        >
          {keyword.name}
        </Link>
      ))}
    </div>
  </div>
);

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.object).isRequired
};
