import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LoadingSpinner } from '../../../components/LoadingSpinner';

const getDisplayName = WrappedComponent => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export const withPagination = WrappedComponent => {
  class MovieListWrapper extends Component {
    static propTypes = {
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      cert: PropTypes.string,
      date: PropTypes.string,
      sort: PropTypes.string,
      genres: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.string
      ]),
      fetchMovies: PropTypes.func.isRequired,
      fetching: PropTypes.bool,
      totalPages: PropTypes.number,
      movies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    static defaultProps = {
      id: null,
      cert: null,
      date: null,
      sort: null,
      genres: null,
      fetching: false,
      totalPages: 1
    }

    state= { page: 1 };

    componentDidMount() {
      const {
        id, cert, date, sort, genres,
        fetchMovies
      } = this.props;
      const { page } = this.state;

      if (sort && date && cert && genres) {
        fetchMovies(sort, date, cert, genres, page);
      } else if (id) {
        fetchMovies(page, id);
      } else fetchMovies(page);
    }

    componentWillReceiveProps(nextProps) {
      const { id, fetchMovies } = this.props;
      const { page } = this.state;
      if (id !== nextProps.id) {
        this.setState({ page: 1 });
        fetchMovies(page, nextProps.id);
      }
    }

    componentWillUpdate(nextProps, nextState) {
      const {
        id, cert, date, sort, genres,
        fetchMovies
      } = this.props;
      const { page } = this.state;

      if (page !== nextState.page) {
        if (sort && date && cert && genres) {
          fetchMovies(sort, date, cert, genres, nextState.page);
        } else if (id) {
          fetchMovies(nextState.page, id);
        } else fetchMovies(nextState.page);
      }
    }

    clickNextBtn = () => this.setState(prevState => ({
      page: prevState.page + 1
    }));

    render() {
      const { fetching, totalPages, movies } = this.props;
      const { page } = this.state;
      return (
        <WrappedComponent movies={movies}>
          {page < totalPages && (
            fetching
              ? <div className="movieList__spinner"><LoadingSpinner /></div>
              : (
                <button
                  className="movieList__nextBtn"
                  onClick={this.clickNextBtn}
                  type="button"
                >
                  More...
                </button>
              )
          )}
        </WrappedComponent>
      );
    }
  }

  MovieListWrapper.displayName = `MovieListWrapper(${getDisplayName(WrappedComponent)})`;

  return MovieListWrapper;
};
