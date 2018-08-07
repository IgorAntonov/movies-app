import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { GENRES } from '../../../ducks/GENRES';
import { Icon } from '../../../ui/Icon';

export class GenresModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    addGenres: PropTypes.func.isRequired,
    alreadySelected: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  state = ({
    selected: this.props.alreadySelected // eslint-disable-line
  });

  componentWillMount() {
    this.root = document.createElement('div');
    this.root.className = 'discoverGenres';
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  clickToggleGenre = id => {
    const { selected } = this.state;
    if (selected.includes(id)) {
      this.setState(prevState => ({
        selected: prevState.selected.filter(item => item !== id)
      }));
    } else {
      this.setState(prevState => ({
        selected: prevState.selected.concat(id)
      }));
    }
  }

  classNameGenreItem = id => {
    const { selected } = this.state;
    return selected.includes(id)
      ? 'discoverGenres__item discoverGenres__item--selected'
      : 'discoverGenres__item';
  }

  clickConfirmBtn = () => {
    const { addGenres, closeModal } = this.props;
    const { selected } = this.state;
    addGenres(selected);
    closeModal();
  }

  renderChildren() {
    const { closeModal } = this.props;
    return (
      <div className="discoverGenres__wrapper">
        <button
          className="discoverGenres__btn discoverGenres__btn--closeBtn"
          onClick={closeModal}
          type="button"
        >
          <Icon icon="close" width="25" height="25" />
        </button>
        <div className="discoverGenres__list">
          {GENRES.map(genre => (
            <div  // eslint-disable-line
              className={this.classNameGenreItem(genre.id)}
              key={genre.id}
              onClick={() => this.clickToggleGenre(genre.id)}
            >
              {`${genre.name}`}
            </div>
          ))}
        </div>
        <button
          onClick={this.clickConfirmBtn}
          className="discoverGenres__btn discoverGenres__btn--confirmBtn"
          type="button"
        >
          OK
        </button>
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
