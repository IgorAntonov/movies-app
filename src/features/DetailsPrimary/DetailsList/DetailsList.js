import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class DetailsList extends Component {
  static propTypes = {
    details: PropTypes.shape({
      production_countries: PropTypes.array,
      production_companies: PropTypes.array,
      genres: PropTypes.array,
      release_date: PropTypes.string,
      budget: PropTypes.number,
      popularity: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      status: PropTypes.string,
      tagline: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number
    }).isRequired
  }

  productionCountries = () => {
    const { details: { production_countries } } = this.props;
    return production_countries.map(country => (
      <span
        key={country.name}
        style={{ textDecoration: 'underline' }}
      >
        {`${country.name} `} <br />
      </span>
    ));
  }

  productionCompanies = () => {
    const { details: { production_companies } } = this.props;
    return production_companies.map(company => (
      <span
        key={company.id}
        style={{ textDecoration: 'underline' }}
      >
        {`${company.name} `} <br />
      </span>
    ));
  }

  genres = () => {
    const { details: { genres } } = this.props;
    return genres.map(genre => (
      <Link
        to={`/genres/${genre.id}`}
        key={genre.id}
        className="detailsPrimaryList__link"
      >
        {`${genre.name} `}
      </Link>
    ));
  }

  formatDate = () => {
    const { details: { release_date } } = this.props;
    const formatter = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const dateArr = release_date.split('-');
    const date = new Date(...dateArr);
    return formatter.format(date);
  }

  render() {
    const { details } = this.props;
    const {
      budget, popularity, release_date, revenue, runtime,
      status, tagline, vote_average, vote_count
    } = details;
    return (
      <div className="detailsPrimaryList">
        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Year:</p>
          <p className="detailsPrimaryList__item__content">{parseFloat(release_date)}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Status:</p>
          <p className="detailsPrimaryList__item__content">{status}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Country:</p>
          <p className="detailsPrimaryList__item__content">{this.productionCountries()}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Tagline:</p>
          {tagline
            ? <p className="detailsPrimaryList__item__content">{tagline}</p>
            : <p className="detailsPrimaryList__item__content">No talgine</p>}
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Genres:</p>
          <p className="detailsPrimaryList__item__content">{this.genres()}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Company:</p>
          <p className="detailsPrimaryList__item__content">{this.productionCompanies()}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Budget:</p>
          <p className="detailsPrimaryList__item__content">{budget}$</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Revenue:</p>
          <p className="detailsPrimaryList__item__content">{revenue}$</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Release date:</p>
          <p className="detailsPrimaryList__item__content">{this.formatDate()}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Runtime:</p>
          <p className="detailsPrimaryList__item__content">{runtime} min.</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Popularity:</p>
          <p className="detailsPrimaryList__item__content">{popularity}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Rating:</p>
          <p className="detailsPrimaryList__item__content">{vote_average}</p>
        </div>

        <div className="detailsPrimaryList__item">
          <p className="detailsPrimaryList__item__content">Voters number:</p>
          <p className="detailsPrimaryList__item__content">{vote_count}</p>
        </div>
      </div>
    );
  }
}
