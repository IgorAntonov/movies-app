import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../../ui/Icon';

export const SideBarLink = ({
  to, closeMenu, text, icon
}) => (
  <NavLink
    to={to}
    className="navigation__item"
    activeClassName="navigation__item__selected"
    exact
    onClick={closeMenu}
  >
    <div className="navigation__item__icon">
      <Icon icon={icon} width="25" height="25" />
    </div>
    <span className="navigation__item__text">
      {text}
    </span>
  </NavLink>
);

SideBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
