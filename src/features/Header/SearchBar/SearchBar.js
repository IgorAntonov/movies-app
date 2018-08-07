import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../ui/Icon';

export class SearchBar extends Component {
  state = { value: '' };

  handleChange = e => this.setState({
    value: e.target.value
  });

  handleSubmit = e => {
    e.preventDefault();
    const { searchType, history } = this.props;
    const { value } = this.state;

    if (value === '') return;
    history.push(`/search/${searchType}/${value}`);

    this.setState({ value: '' });
  }

  render() {
    const { searchType } = this.props;
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="searchbar">
        <input
          value={value}
          onChange={this.handleChange}
          className="searchbar__input"
          placeholder={`search ${searchType}...`}
        />
        <button
          type="submit"
          className="searchbar__button"
        >
          <Icon icon="search" width="33" height="33" />
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchType: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
};
