import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from '../../ui/Icon';
import { SearchBar } from './SearchBar';
import { SideBar } from './SideBar';

export class Header extends Component {
  static propTypes = {
    subTitle: PropTypes.string,
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired,
  }

  static defaultProps = {
    subTitle: null
  }

   state = {
     isModalOpen: false,
     searchType: 'movies'
   }

  openMenuClick = () => this.setState({ isModalOpen: true });

  closeMenuClick = () => this.setState({ isModalOpen: false });

  changeSearchType = searchType => this.setState({ searchType });

  renderSubTitle = () => {
    const {
      location: { pathname },
      subTitle
    } = this.props;
    switch (true) {
      case /\/popular/.test(pathname):
        return ' Popular';
      case /\/top/.test(pathname):
        return ' Top movies';
      case /\/upcoming/.test(pathname):
        return ' Upcoming movies';
      case subTitle !== null:
        return ` ${subTitle}`;
      default:
        return '';
    }
  }

  render() {
    const { history } = this.props;
    const { searchType, isModalOpen } = this.state;
    return (
      <header className="header">
        <button
          onClick={this.openMenuClick}
          className="header__icon"
          type="button"
        >
          <Icon icon="burger" width="33" height="33" />
        </button>
        <Link to="/" className="header__title">
          <h2 className="header__title__content">Movies App</h2>
        </Link>

        <h4 className="header__subtitle">
          {this.renderSubTitle()}
        </h4>

        <SearchBar
          history={history}
          searchType={searchType}
        />

        {isModalOpen && (
          <SideBar
            show={isModalOpen}
            closeMenu={this.closeMenuClick}
            changeType={this.changeSearchType}
          />
        )}
      </header>
    );
  }
}
