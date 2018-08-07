import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Icon } from '../../../ui/Icon';
import { SideBarLink } from '../SideBarLink';
import { SideBarGenres } from '../SideBarGenres';

export class SideBar extends Component {
  static propTypes = {
    changeType: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
  }

  state = ({
    genresOpen: false,
    searchOpen: false
  });

  componentWillMount() {
    this.root = document.createElement('aside');
    this.root.className = 'sidebar';
    document.body.appendChild(this.root);
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.removeEventListener('click', this.handleClickOutside);
  }

  genresToggle = () => this.setState(prevState => ({
    genresOpen: !prevState.genresOpen
  }));

  searchOpen = () => this.setState({ searchOpen: true });

  searchClose = () => this.setState({ searchOpen: false });

  searchToggle = () => this.setState(prevState => ({
    searchOpen: !prevState.searchOpen
  }))

  searchTypeClick = e => {
    const { changeType, closeMenu } = this.props;
    changeType(e.target.textContent.toLowerCase());
    closeMenu();
  }

  handleClickOutside = e => {
    const { closeMenu } = this.props;
    const isClickInside = this.root.contains(e.target);
    if (!isClickInside) this.root.classList.add('sidebar__closing');
    if (!isClickInside) setTimeout(() => closeMenu(), 250);
  }

  handleClickBurger = () => {
    const { closeMenu } = this.props;
    this.root.classList.add('sidebar__closing');
    setTimeout(() => closeMenu(), 250);
  }

  renderChildren = () => {
    const { closeMenu } = this.props;
    const { genresOpen, searchOpen } = this.state;
    return (
      <div className="sidebar__wrapper">
        <div className="sidebar__main">
          <div className="sidebar__burger">
            <button
              onClick={this.handleClickBurger}
              className="sidebar__burger__wrapper"
              type="button"
            >
              <Icon className="navigation__item__icon" icon="burger" width="33" height="33" />
            </button>
          </div>

          <nav className="navigation">
            <div className="navigation__item navigation__item--button navigation__item--search">
              <button
                onClick={this.searchToggle}
                onMouseEnter={this.searchOpen}
                onMouseLeave={this.searchClose}
                className="navigation__item--wrapper"
                type="button"
              >
                <div className="navigation__item__icon">
                  <Icon icon="search" width="25" height="25" />
                </div>
                <span className="navigation__item__text">Search</span>
              </button>
              {searchOpen && (
                <div
                  className="searchTypes"
                  onMouseEnter={this.searchOpen}
                  onMouseLeave={this.searchClose}
                >
                  <button
                    className="searchTypes__button"
                    onClick={this.searchTypeClick}
                    type="button"
                  >
                    Movies
                  </button>
                  <button
                    className="searchTypes__button"
                    onClick={this.searchTypeClick}
                    type="button"
                  >
                    People
                  </button>
                </div>
              )}
            </div>
            <SideBarLink
              to="/popular"
              closeMenu={closeMenu}
              icon="star"
              text="Popular"
            />
            <SideBarLink
              to="/top"
              closeMenu={closeMenu}
              icon="lightning"
              text="Top rated"
            />
            <SideBarLink
              to="/upcoming"
              closeMenu={closeMenu}
              icon="clock"
              text="Upcoming"
            />

            <button
              className="navigation__item navigation__item--button navigation__item--wrapper"
              onClick={this.genresToggle}
              type="button"
            >
              <div className="navigation__item__icon">
                <Icon icon="umbrella" width="25" height="25" />
              </div>
              <span className="navigation__item__text">
                Genres
              </span>
            </button>
          </nav>
        </div>
        {genresOpen && <SideBarGenres closeMenu={closeMenu} />}
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.renderChildren(),
      this.root
    );
  }
}
