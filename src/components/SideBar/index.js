import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


import Icon from '../Icon';
import { GENRES } from '../../constants/other';

export default class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      genresOpen: false,
      searchOpen: false
    });

    this.handlerClickOutside = this.handlerClickOutside.bind(this);
    this.handlerClickBurger = this.handlerClickBurger.bind(this);
    this.handleGenresToggle = this.handleGenresToggle.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
    this.searchTypeClick = this.searchTypeClick.bind(this);
  }
  
  handleGenresToggle() {
    this.setState(prevState => ({
      genresOpen: !prevState.genresOpen
    }));
  }
  handleSearchToggle() {
    this.setState(prevState => ({
      searchOpen: !prevState.searchOpen
    }));
  }
  searchTypeClick(e) {
    this.props.changeType(e.target.textContent.toLowerCase());
    this.props.closeMenu();
  }


  handlerClickOutside(event) {
    const isClickInside = this.root.contains(event.target);
    if(!isClickInside) this.root.classList.add('sidebar__closing');
    if(!isClickInside) setTimeout(() => {
      this.props.closeMenu(); 
    }, 250);
  }

  handlerClickBurger(event) {
    this.root.classList.add('sidebar__closing');
    setTimeout(() => {
      this.props.closeMenu();
    }, 250);
  }

  componentWillMount() {
    this.root = document.createElement('aside');
    this.root.className = 'sidebar';
    document.body.appendChild(this.root);
   

    document.addEventListener('click', this.handlerClickOutside);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.removeEventListener('click', this.handlerClickOutside);
  }

  renderChildren() {
    return (
    <div className='sidebar__wrapper'>
      <div className='sidebar__main'>  
        <div className='sidebar__burger'>
          <div onClick={this.handlerClickBurger} className='sidebar__burger__wrapper' >
            <Icon className='navigation__item__icon' icon='burger' width='30' height='30' />
          </div>     
        </div>
         
        <nav className='navigation'>
          <div className='navigation__item navigation__item--button navigation__item--search' >
            <div className='navigation__item--wrapper' onClick={this.handleSearchToggle} >
              <div className='navigation__item__icon' >
                <Icon icon='search' width='25' height='25' />
              </div> 
              <span className='navigation__item__text'>Search</span>
            </div>
            {this.state.searchOpen && this.renderSearchBar()}
          </div>
      
          <NavLink
            to='/popular' 
            className='navigation__item'
            activeClassName="navigation__item__selected"
            onClick={this.props.closeMenu}
          >
            <div className='navigation__item__icon' >
              <Icon icon='star' width='25' height='25' />
            </div>
            <span className='navigation__item__text'>Popular</span>
          </NavLink>
      
          <NavLink 
            to='/top' 
            className='navigation__item' 
            activeClassName="navigation__item__selected"
            onClick={this.props.closeMenu} 
          >
            <div className='navigation__item__icon' >
              <Icon icon='lightning' width='25' height='25' />
            </div>  
            <span className='navigation__item__text'>Top rated</span>
          </NavLink>
      
          <NavLink 
            to='/upcoming' 
            className='navigation__item'
            activeClassName="navigation__item__selected"
            onClick={this.props.closeMenu}
          >
            <div className='navigation__item__icon' >
              <Icon icon='clock' width='25' height='25' />
            </div>
            <span className='navigation__item__text'>Upcoming</span>
          </NavLink>
      
          <button
            className='navigation__item navigation__item--button'
            onClick={this.handleGenresToggle}
          >
            <div className='navigation__item__icon' >
              <Icon icon='umbrella' width='25' height='25' />
            </div>
            <span className='navigation__item__text'>Genres</span>
          </button>
        </nav>
          
      </div>
      {this.state.genresOpen && this.renderGenresBar()}
    </div>
    )
  }

  renderGenresBar() {
    return (
      <div className='genresBar' >
        {GENRES.map(genre => {
          return (
            <NavLink
              key={genre.id}
              id={genre.id}
              to={`/genres/${genre.id}`} 
              className='navigation__item navigation__item--sub'
              onClick={this.props.closeMenu}
            >
              {genre.name}
            </NavLink>
          ) 
        })}  
      </div>
    );
  }

  renderSearchBar() {
    return (
      <div className='searchTypes'>
        <button 
          className='searchTypes__button'
          onClick={this.searchTypeClick}   
        >
          Movies
        </button>
        <button
          className='searchTypes__button'
          onClick={this.searchTypeClick}       
        >
          People
        </button>
      </div>
    )
  }

  render() {
    return ReactDOM.createPortal(
      this.renderChildren(),
      this.root
    );
  }   
}

