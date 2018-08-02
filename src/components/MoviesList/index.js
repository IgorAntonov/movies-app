import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import noPoster from '../../img/noPoster.png';

const MoviesList = props => {
  const { movies } = props;

  const renderOverview = overview => {
    return overview
      ? overview.length < 150 ? overview : `${overview.slice(0, 151)}...`
      : 'No description available'
  }

  const renderList = movies.map(movie => {

    return (
      <div key={movie.id} className='movieItem'>
        <Link to={`/movies/${movie.id}`} className='movieItem__link' >
          <div className='movieItem__poster'>
            {
              movie.backdrop_path
              ? <img alt='poster' src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}/>
              : <img alt='poster' src={noPoster}/>
            }
          </div>    
          <h5 className='movieItem__title'>{movie.title} ({parseFloat(movie.release_date)})</h5> 
          <p className='movieItem__overview' >{renderOverview(movie.overview)}</p>               
        </Link>    
      </div>
    ); 
  });
   
  const renderPage = () => {
    if (movies.length) {
      return (
        <div className='movieList'>
          {renderList}
          {props.children}
        </div>
      );
    };
    return <div className='movieList'> Movies list is empty :(</div>
  };

  return (
    renderPage()
  );
}



MoviesList.propTypes = {
  movies: PropTypes.array
};

export default MoviesList;