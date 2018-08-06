import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { GENRES } from '../../../ducks/GENRES';

export const SideBarGenres = ({ closeMenu }) => (
  <div className="genresBar">
    {GENRES.map(genre => (
      <NavLink
        key={genre.id}
        id={genre.id}
        to={`/genres/${genre.id}`}
        className="navigation__item navigation__item--sub"
        onClick={closeMenu}
      >
        {genre.name}
      </NavLink>
    ))}
  </div>
);

SideBarGenres.propTypes = {
  closeMenu: PropTypes.func.isRequired
};
