import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PersonInfo } from './PersonInfo';
import noPoster from '../../img/noPosterFull.png';

export class PersonPrimary extends Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      gender: PropTypes.number,
      birthday: PropTypes.string,
      deathday: PropTypes.string,
      biography: PropTypes.string,
      place_of_birth: PropTypes.string,
      profile_path: PropTypes.string,
      imdb_id: PropTypes.string
    }).isRequired
  }

  formatDate = date => {
    const formatter = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const dateArr = date.split('-');
    const output = new Date(...dateArr);
    return formatter.format(output);
  };

  gender = () => {
    const { details: { gender } } = this.props;
    if (gender === 1) {
      return ' (female)';
    }
    return ' (male)';
  }

  birthday = () => {
    const { details: { birthday } } = this.props;
    if (!birthday) return null;
    return this.formatDate(birthday);
  };

  deathDate = () => {
    const { details: { deathday } } = this.props;
    if (!deathday) return null;
    return this.formatDate(deathday);
  };

  render() {
    const { details } = this.props;
    const {
      name, biography, place_of_birth,
      profile_path, imdb_id
    } = details;
    return (
      <div className="personPrimary">
        <div className="personPrimary__poster">
          {profile_path
            ? <img alt="poster" src={`https://image.tmdb.org/t/p/w185${profile_path}`} />
            : <img alt="poster" src={noPoster} />}
        </div>
        <PersonInfo
          name={name}
          gender={this.gender()}
          birthday={this.birthday()}
          birthPlace={place_of_birth}
          deathday={this.deathDate()}
          imdbId={imdb_id || null}
        />

        {biography !== ''
          ? <p className="personPrimary__biography">{biography}</p>
          : null}
      </div>
    );
  }
}
