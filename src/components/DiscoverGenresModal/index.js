import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { GENRES } from '../../ducks/GENRES';
import Icon from '../Icon';

export default class DiscoverGenresModal extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      selected: this.props.alreadySelected
    });

    this.clickToggleGenre = this.clickToggleGenre.bind(this);
    this.clickConfirmBtn = this.clickConfirmBtn.bind(this);
  }



  componentWillMount() {
    this.root = document.createElement('div');
    this.root.className = 'discoverGenres';
    document.body.appendChild(this.root);
  }
  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  clickToggleGenre(id) {
    this.state.selected.includes(id) ?
    
    this.setState(prevState => ({
      selected: prevState.selected.filter(item => item !== id)
    })) :

    this.setState(prevState => ({
      selected: prevState.selected.concat(id)
    }));
  }
  classNameGenreItem(id) {
    return this.state.selected.includes(id) ?
    'discoverGenres__item discoverGenres__item--selected' :
    'discoverGenres__item'; 
  }
  clickConfirmBtn() {
    this.props.addGenres(this.state.selected);
    this.props.closeModal();
  }

  renderChildren() {
    return <div className='discoverGenres__wrapper'>
      <button 
        className='discoverGenres__btn discoverGenres__btn--closeBtn'
        onClick={this.props.closeModal} 
      >
        <Icon icon='close' width='25' height='25' />
      </button>
      <div className='discoverGenres__list'>
        {GENRES.map(genre => {
          return <div 
            className={this.classNameGenreItem(genre.id)}
            key={genre.id}
            onClick={() => this.clickToggleGenre(genre.id)}
          >
            {`${genre.name}`}
          </div>
        })}
      </div>
      <button 
        onClick={this.clickConfirmBtn}
        className='discoverGenres__btn discoverGenres__btn--confirmBtn'
      >
        OK
      </button>
    </div>
  }

  render() {
    return ReactDOM.createPortal(
      this.renderChildren(),
      this.root
    );
  }
}