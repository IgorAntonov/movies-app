import React, { Component } from 'react';

import { GENRES } from '../../ducks/GENRES';
import { FormSort } from './FormSort';
import { FormYear } from './FormYear';
import { FormCert } from './FormCert';
import { FormGenres } from './FormGenres';

export class DiscoverForm extends Component {
  state = {
    sortOption: 'popularity',
    sortOrder: 'up',
    exactYear: '',
    yearFrom: '',
    yearUntil: 2018,
    cert: 'all',
    certMethod: 'exact',
    withGenres: [],
    genresOpen: false
  }

  classNameSortOption = sort => {
    const { sortOption } = this.state;
    return sortOption === sort
      ? 'discoverFormSort__btn discoverFormSort__btn--selected'
      : 'discoverFormSort__btn';
  }

  classNameSortOrder = order => {
    const { sortOrder } = this.state;
    switch (order) {
      case 'up':
        return sortOrder === order
          ? 'discoverFormSort__orderBtn discoverFormSort__orderBtn--up discoverFormSort__orderBtn--upSelected'
          : 'discoverFormSort__orderBtn discoverFormSort__orderBtn--up';
      case 'down':
        return sortOrder === order
          ? 'discoverFormSort__orderBtn discoverFormSort__orderBtn--down discoverFormSort__orderBtn--downSelected'
          : 'discoverFormSort__orderBtn discoverFormSort__orderBtn--down';
      default: return null;
    }
  }

  clickOnSortOptionBtn = e => {
    e.preventDefault();
    this.setState({
      sortOption: e.target.innerText.toLowerCase()
    });
  }

  clickOnSortOrderBtnUp = e => {
    e.preventDefault();
    this.setState({ sortOrder: 'up' });
  }

  clickOnSortOrderBtnDown = e => {
    e.preventDefault();
    this.setState({ sortOrder: 'down' });
  }

  changeYearFrom = e => this.setState({
    yearFrom: e.target.value,
    exactYear: '',
  });

  changeYearUntil = e => this.setState({
    yearUntil: e.target.value,
    exactYear: ''
  });

  changeExactYear = e => this.setState({
    exactYear: e.target.value,
    yearFrom: '',
    yearUntil: ''
  })

  verifyReleaseYear = field => {
    const { [field]: year } = this.state;
    if (year < 1888 && year !== '') {
      this.setState({ [field]: 1888 });
    }
    if (year > 2018) {
      this.setState({ [field]: 2018 });
    }
  }

  classNameCert = certification => {
    const { cert } = this.state;
    return cert === certification
      ? 'discoverFormCert__btn discoverFormCert__btn--selected'
      : 'discoverFormCert__btn';
  }

  classNameMethodBtn = method => {
    const { certMethod } = this.state;
    return certMethod === method
      ? 'discoverFormCert__methodBtn discoverFormCert__methodBtn--selected'
      : 'discoverFormCert__methodBtn';
  }

  isMethodBtnDisabled = () => {
    const { cert } = this.state;
    return cert === 'all';
  }

  clickOnCert = e => {
    e.preventDefault();
    this.setState({
      cert: e.target.innerText.toLowerCase()
    });
  }

  clickOnCertMethod = (certMethod, e) => {
    e.preventDefault();
    this.setState({ certMethod });
  }

  clickAddGenres = e => {
    e.preventDefault();
    this.setState({ genresOpen: true });
  }

  closeGenresModal = () => this.setState({
    genresOpen: false
  });

  addGenres = genres => this.setState({
    withGenres: genres
  });

  clickRemoveGenre = id => this.setState(prevState => ({
    withGenres: prevState.withGenres.filter(genreId => genreId !== id)
  }));

  genresNames = () => {
    const { withGenres } = this.state;
    return GENRES.filter(item => withGenres.includes(item.id));
  }

  linkWhenSubmit = () => {
    const {
      sortOption, sortOrder, exactYear,
      yearFrom, yearUntil, cert, certMethod,
      withGenres
    } = this.state;
    const verifiedYearFrom = (yearFrom === '' && exactYear === '') ? '1888' : yearFrom;
    const date = exactYear === '' ? `${verifiedYearFrom}-${yearUntil}` : exactYear;
    const certification = cert === 'all' ? cert : `${cert}_${certMethod}`;
    const genres = withGenres.length > 0 ? withGenres.join('-') : 'all';

    return `/discover/${sortOption}_${sortOrder}/${date}/${certification}/${genres}`;
  }

  render() {
    const {
      exactYear, yearFrom, yearUntil, genresOpen, withGenres
    } = this.state;
    return (
      <form className="discoverForm">
        <FormSort
          classNameSortOption={this.classNameSortOption}
          clickOnSortOptionBtn={this.clickOnSortOptionBtn}
          classNameSortOrder={this.classNameSortOrder}
          clickOnSortOrderBtnDown={this.clickOnSortOrderBtnDown}
          clickOnSortOrderBtnUp={this.clickOnSortOrderBtnUp}
        />
        <FormYear
          exactYear={exactYear}
          yearFrom={yearFrom}
          yearUntil={yearUntil}
          verifyReleaseYear={this.verifyReleaseYear}
          changeExactYear={this.changeExactYear}
          changeYearFrom={this.changeYearFrom}
          changeYearUntil={this.changeYearUntil}
        />
        <FormCert
          classNameCert={this.classNameCert}
          clickOnCert={this.clickOnCert}
          classNameMethodBtn={this.classNameMethodBtn}
          clickOnCertMethod={this.clickOnCertMethod}
          isMethodBtnDisabled={this.isMethodBtnDisabled}
        />
        <FormGenres
          clickAddGenres={this.clickAddGenres}
          clickRemoveGenre={this.clickRemoveGenre}
          linkWhenSubmit={this.linkWhenSubmit}
          genresOpen={genresOpen}
          closeGenresModal={this.closeGenresModal}
          addGenres={this.addGenres}
          withGenres={withGenres}
          genresNames={this.genresNames()}
        />
      </form>
    );
  }
}
