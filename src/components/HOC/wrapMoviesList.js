import React, { Component } from 'react';

import { LoadingSpinner } from '../LoadingSpinner';

const wrapMoviesList = (WrappedComponent) => {
  class MovieListWrapper extends Component {
    constructor(props) {
      super(props);

      this.state= {
        page: 1
      };

      this.clickNextBtn = this.clickNextBtn.bind(this);
    }

    componentDidMount() {
      const { id, cert, date, sort, genres } = this.props;
      const { page } = this.state;

      (sort && date && cert && genres) ? 
        this.props.fetchMovies(sort, date, cert, genres, page) :
        (id ? this.props.fetchMovies(page, id) : this.props.fetchMovies(page))
    }

    componentWillUpdate(nextProps, nextState) {
      const { id, cert, date, sort, genres } = this.props;
      const { page } = this.state;
      
      if (page !== nextState.page) {
        (sort && date && cert && genres) ? 
        this.props.fetchMovies(sort, date, cert, genres, nextState.page) :
        (id ? this.props.fetchMovies(nextState.page, id) : this.props.fetchMovies(nextState.page))
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.id !== nextProps.id) {
        this.setState({ page: 1});
        this.props.fetchMovies(this.state.page, nextProps.id)
      }
    }

    clickNextBtn() {
      this.setState(prevState => ({
        page: prevState.page + 1
      }));
    }

    renderChildren() {
      const { fetching, totalPages } = this.props;
      const { page } = this.state;
      
      if (page < totalPages) {
        return (
          fetching
          ? <div className='movieList__spinner'><LoadingSpinner /></div>
          : <button className='movieList__nextBtn' onClick={this.clickNextBtn} >More...</button>
        );
      };

    }

    render() {
      return <WrappedComponent movies={this.props.movies}>
        {this.renderChildren()}
      </WrappedComponent>  
    }
  };

  MovieListWrapper.displayName = `MovieListWrapper(${getDisplayName(WrappedComponent)})`;

  return MovieListWrapper;
};



const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default wrapMoviesList;
