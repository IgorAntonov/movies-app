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
    history.push(`/search/${searchType}/${value}`);

    this.setState({ value: '' });
  }

  render() {
    const { searchType } = this.props;
    const { value } = this.state;
    return (
      <div className="searchbar">
        <form onSubmit={this.handleSubmit} className="searchbar__form">
          <div className="searchbar__label">
            Search {searchType}:
          </div>
          <input
            value={value}
            onChange={this.handleChange}
            className="searchbar__input"
            placeholder="Enter a query..."
          />
          <button
            type="submit"
            className="searchbar__button"
          >
            <Icon icon="search" width="35" height="35" />
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchType: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
};
