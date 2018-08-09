import React, { Component } from 'react';
import { throttle } from 'lodash';

import { Icon } from '../../ui/Icon';

export class ScrollToTop extends Component {
  state = {
    isBtnShow: 'scrollToTop'
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 100));
  }

  handleScroll = () => {
    if (window.pageYOffset > 150) {
      this.setState({
        isBtnShow: 'scrollToTop scrollToTop--show'
      });
    } else {
      this.setState({
        isBtnShow: 'scrollToTop'
      });
    }
  }

  handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { isBtnShow } = this.state;
    return (
      <button
        type="button"
        className={isBtnShow}
        onClick={this.handleClick}
      >
        <Icon
          icon="top"
          width="30"
          height="30"
          viewBox="0 0 97 97"
        />
      </button>
    );
  }
}
