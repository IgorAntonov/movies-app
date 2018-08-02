import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      searchType: 'movies'
    };

    this.openMenuClick = this.openMenuClick.bind(this);
    this.closeMenuClick = this.closeMenuClick.bind(this);
    this.changeSearchType = this.changeSearchType.bind(this);
  }

  openMenuClick() {
    this.setState({ isModalOpen: true });
  }
  closeMenuClick() {
    this.setState({ isModalOpen: false });
  }
  changeSearchType(searchType) {
    this.setState({ searchType });
  }

  renderSubTitle() {
    const { pathname } = this.props.location;
    const { subTitle } = this.props;
    switch (true) {
      case /\/popular/.test(pathname):
        return '| Popular';
      case /\/top/.test(pathname):
        return '| Top movies';
      case /\/upcoming/.test(pathname):
        return '| Upcoming movies';
      case subTitle !== null:
        return `| ${subTitle}`;  
      default:
        return '';
    }
  }
  

  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>

          <div onClick={this.openMenuClick} className='header__icon header__icon--burger'>
            <Icon icon='burger' width='30' height='30' />
          </div>

          <Link to='/' className='header__title' >
            <h2 className='header__title__content' >Movies App</h2>
          </Link>

          <h4 className='header__subtitle'>{this.renderSubTitle()}</h4>
         
          <SearchBar history={this.props.history} searchType={this.state.searchType} />                   

          <div className='header__icon header__icon--login'>
          <span className='header__iconLabel' >Login</span>
            <Icon  icon='login' width='30' height='30' />
          </div>
          <div className='header__icon header__icon--signup'>
            <span className='header__iconLabel'>Sign Up</span>
            <Icon  icon='signUp' width='30' height='30' />
          </div>     
        </div>

        {this.state.isModalOpen &&
          <SideBar show={this.state.isModalOpen} closeMenu={this.closeMenuClick} changeType={this.changeSearchType} />
        }
                 
      </header>
    );
  }
}

export default Header;

