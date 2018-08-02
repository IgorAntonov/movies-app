import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class CarouselModal extends Component {

  constructor(props) {
    super(props);
    
    this.state = ({
      size: 300
    });

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    const { closeModal } = this.props;
    const target = document.querySelector('.carousel__modalImage');

    if (target !== e.target) {
      closeModal();
    } else {
      this.setState(prevState => {
        if (prevState.size === 300) {
          return {size: prevState.size + 200}
        } else return {size: prevState.size - 200}
      });
    }
  };

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

  render() {
    const { urlForModal } = this.props;
    const { size } = this.state;
    const url = `https://image.tmdb.org/t/p/w${size}${urlForModal}`;

    return ReactDOM.createPortal(
      <div className='carousel__modalWrapper' >
        <img
          src={url}
          alt='full'
          className='carousel__modalImage' 
        />
      </div>,
      this.root
    );
  }
};