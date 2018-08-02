import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchType } = this.props;
    
    this.props.history.push(`/search/${searchType}/${this.state.value}`);

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className='searchbar' >
        <form onSubmit={this.handleSubmit} className='searchbar__form' >
          <label className='searchbar__label' >Search {this.props.searchType}:</label>
          <input 
            value={this.state.value} 
            onChange={this.handleChange} 
            className='searchbar__input' 
            placeholder='Enter the query...'
          />
          <button 
            type='submit' 
            className='searchbar__button'
          >
            <Icon  icon='search' width='35' height='35' />
          </button>
        </form>
      </div>     
    );
  }
}

SearchBar.propTypes = {
  fetchMovies: PropTypes.func
};

export default SearchBar;

