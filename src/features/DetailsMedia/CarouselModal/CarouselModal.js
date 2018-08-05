import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class CarouselModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    urlForModal: PropTypes.string.isRequired
  }

  state = { size: 300 };

  componentWillMount() {
    this.root = document.createElement('div');
    this.root.className = 'carousel__modal';
    document.body.appendChild(this.root);

    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = e => {
    const { closeModal } = this.props;
    const target = document.querySelector('.carousel__modalImage');

    if (target !== e.target) {
      closeModal();
    } else {
      this.setState(prevState => {
        if (prevState.size === 300) {
          return { size: prevState.size + 200 };
        }
        return { size: prevState.size - 200 };
      });
    }
  };

  render() {
    const { urlForModal } = this.props;
    const { size } = this.state;
    const url = `https://image.tmdb.org/t/p/w${size}${urlForModal}`;

    return ReactDOM.createPortal(
      <div className="carousel__modalWrapper">
        <img
          src={url}
          alt="full"
          className="carousel__modalImage"
        />
      </div>,
      this.root
    );
  }
}
