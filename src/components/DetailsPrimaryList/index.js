import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPrimaryList = ({ details} ) => {

  const {
    budget, genres, popularity,  production_companies, 
    production_countries, release_date, revenue, runtime,
    status, tagline, vote_average, vote_count
  } = details;

  const renderProductionCountries = production_countries.map(country => {
    return <span key={country.name} style={{textDecoration: 'underline'}}>{`${country.name} `}<br/></span>
  });

  const renderProductionCompanies = production_companies.map(company => {
    return <span key={company.id} style={{textDecoration: 'underline'}}>{`${company.name} `}<br/></span>
  });

  const renderGenres = genres.map(genre => {
      return <Link to={`/genres/${genre.id}`} key={genre.id} className='detailsPrimaryList__link' >
      {`${genre.name} `}
    </Link>
  });

  const renderDate = () => {
    const formatter = new Intl.DateTimeFormat('en', {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const dateArr = release_date.split('-');
    const date = new Date(...dateArr);
    return formatter.format(date);
  }

  return (

    <div className='detailsPrimaryList'>
      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content' >Year:</p>
        <p className='detailsPrimaryList__item__content'>{parseFloat(release_date)}</p>
      </div>

      <div className='detailsPrimaryList__item'>  
        <p className='detailsPrimaryList__item__content' >Status:</p>
        <p className='detailsPrimaryList__item__content'>{status}</p>   
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content' >Country:</p>
        <p className='detailsPrimaryList__item__content'>{renderProductionCountries}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Tagline:</p>
        {tagline
          ? <p className='detailsPrimaryList__item__content'>{tagline}</p>
          : <p className='detailsPrimaryList__item__content'>No talgine</p>}
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Genres:</p>
        <p className='detailsPrimaryList__item__content'>{renderGenres}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Company:</p>
        <p className='detailsPrimaryList__item__content'>{renderProductionCompanies}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Budget:</p>
        <p className='detailsPrimaryList__item__content'>{budget}$</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Revenue:</p>
        <p className='detailsPrimaryList__item__content'>{revenue}$</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Release date:</p>
        <p className='detailsPrimaryList__item__content'>{renderDate()}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Runtime:</p>
        <p className='detailsPrimaryList__item__content'>{runtime} min.</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Popularity:</p>
        <p className='detailsPrimaryList__item__content'>{popularity}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Rating:</p>
        <p className='detailsPrimaryList__item__content'>{vote_average}</p>
      </div>

      <div className='detailsPrimaryList__item'>
        <p className='detailsPrimaryList__item__content'>Voters number:</p>
        <p className='detailsPrimaryList__item__content'>{vote_count}</p>
      </div>
    </div>
  )
};

export default DetailsPrimaryList;