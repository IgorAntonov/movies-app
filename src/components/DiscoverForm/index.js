import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DiscoverGenresModal from '../DiscoverGenresModal';
import { GENRES } from '../../ducks/GENRES';
import Icon from '../Icon';

export default class DiscoverForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.clickOnSortOptionBtn = this.clickOnSortOptionBtn.bind(this);
    this.clickOnSortOrderBtnUp = this.clickOnSortOrderBtnUp.bind(this);
    this.clickOnSortOrderBtnDown = this.clickOnSortOrderBtnDown.bind(this);
    this.clickOnCert = this.clickOnCert.bind(this);
    this.changeYearFrom = this.changeYearFrom.bind(this);
    this.changeYearUntil = this.changeYearUntil.bind(this);
    this.changeExactYear = this.changeExactYear.bind(this);
    this.verifyReleaseYear = this.verifyReleaseYear.bind(this);
    this.clickAddGenres = this.clickAddGenres.bind(this);
    this.closeGenresModal = this.closeGenresModal.bind(this);
    this.addGenres = this.addGenres.bind(this);
    this.clickRemoveGenre = this.clickRemoveGenre.bind(this);
  }

  classNameSortOption(sort) {
    return this.state.sortOption === sort ? 
      'discoverFormSort__btn discoverFormSort__btn--selected' :
      'discoverFormSort__btn'
  }
  classNameSortOrder(order) {
    switch (order) {
      case 'up':
        return this.state.sortOrder === order ?
          'discoverFormSort__orderBtn discoverFormSort__orderBtn--up discoverFormSort__orderBtn--upSelected' :
          'discoverFormSort__orderBtn discoverFormSort__orderBtn--up';
      case 'down':
        return this.state.sortOrder === order ?
          'discoverFormSort__orderBtn discoverFormSort__orderBtn--down discoverFormSort__orderBtn--downSelected' :
          'discoverFormSort__orderBtn discoverFormSort__orderBtn--down';
      default: return null; 
    }
  }
  clickOnSortOptionBtn(e) {
    e.preventDefault();
    this.setState({
      sortOption: e.target.innerText.toLowerCase()
    });
  }
  clickOnSortOrderBtnUp(e) {
    e.preventDefault();
    this.setState({
      sortOrder: 'up'
    });
  }
  clickOnSortOrderBtnDown(e) {
    e.preventDefault();
    this.setState({
      sortOrder: 'down'
    });
  }
  changeYearFrom(e) {
    this.setState({
      yearFrom: e.target.value,
      exactYear: '',
      
    });
  }
  changeYearUntil(e) {
    this.setState({
      yearUntil: e.target.value,
      exactYear: ''   
    });
  }
  changeExactYear(e) {
    this.setState({
      exactYear: e.target.value,
      yearFrom: '',
      yearUntil: ''
    })
  }
  verifyReleaseYear(year) {
    (this.state[year] < 1888 && this.state[year] !== '') && this.setState({
      [year]: 1888
    });
    this.state[year] > 2018 && this.setState({
      [year]: 2018
    });
  }
  classNameCert(cert) {
    return this.state.cert === cert ?
      'discoverFormCert__btn discoverFormCert__btn--selected' :
      'discoverFormCert__btn'
  }
  classNameMethodBtn(method) {
    const { certMethod } = this.state;

    return certMethod === method ?
      'discoverFormCert__methodBtn discoverFormCert__methodBtn--selected' :
      'discoverFormCert__methodBtn'
  }
  isMethodBtnDisabled() {
    return this.state.cert === 'all' ? true : false
  }
  clickOnCert(e) {
    e.preventDefault();
    this.setState({
      cert: e.target.innerText.toLowerCase()
    });
  }
  clickOnCertMethod(certMethod, e) {
    e.preventDefault();
    this.setState({
      certMethod
    });
  }
  clickAddGenres(e) {
    e.preventDefault();
    this.setState({
      genresOpen: true
    });
  }
  closeGenresModal() {
    this.setState({
      genresOpen: false
    });
  }
  addGenres(genres) {
    this.setState({
      withGenres: genres
    });
  }
  clickRemoveGenre(id) {
    this.setState(prevState => ({
      withGenres: prevState.withGenres.filter(genreId => genreId !== id)
    }))
  }
  renderGenresLine() {
    const genreIds = this.state.withGenres;
    const filtered = GENRES.filter(item => genreIds.includes(item.id));
    
    if (genreIds.length === 0) {
      return <div className='discoverFormGenres__defaultLine'>
        Search all genres (by default)
      </div>
    }
    
    return filtered.map(genre => {
      return <div
      key={genre.id}
      className='discoverFormGenres__genresItem'
      >
        {`${genre.name}`}
        <button 
          className='discoverFormGenres__closeBtn'
          onClick={() => this.clickRemoveGenre(genre.id)} 
        >
          <Icon icon='close' width='20' height='20' />
        </button>
      </div>
    });
  }

  linkWhenSubmit() {
    const { sortOption, sortOrder, exactYear, 
      yearFrom, yearUntil, cert, certMethod, 
      withGenres } = this.state;
    const verifiedYearFrom = (yearFrom === '' && exactYear === '') ? '1888' : yearFrom;
    const date = exactYear === '' ? `${verifiedYearFrom}-${yearUntil}` : exactYear;
    const certification = cert === 'all' ? cert : `${cert}_${certMethod}`;
    const genres = withGenres.length > 0 ? withGenres.join('-') : 'all';
    
    return `/discover/${sortOption}_${sortOrder}/${date}/${certification}/${genres}`;
  }

  render() {
    return <form className='discoverForm'>

      <div className='discoverFormSort'>
        <legend className='discoverFormSort__legend' >Sort by</legend>

        <div className='discoverFormSort__wrapper'>

          <div className='discoverFormSort__choices'>

            <button 
              className={this.classNameSortOption('popularity')}
              onClick={this.clickOnSortOptionBtn}          
            >
              Popularity
            </button>

            <button 
              className={this.classNameSortOption('rating')}
              onClick={this.clickOnSortOptionBtn}
            >
              Rating
            </button>

            <button 
              className={this.classNameSortOption('release date')}
              onClick={this.clickOnSortOptionBtn}
            >
              Release date
            </button>

            <button 
              className={this.classNameSortOption('alphabet')}
              onClick={this.clickOnSortOptionBtn}  
            >
              Alphabet
            </button>

          </div>

          <div className='discoverFormSort__upDown' >

            <button 
              className={this.classNameSortOrder('up')}
              onClick={this.clickOnSortOrderBtnUp}  
            >
              <Icon icon='arrowUp' width='40' height='40' />
            </button>

            <button 
              className={this.classNameSortOrder('down')}
              onClick={this.clickOnSortOrderBtnDown}  
            >
              <Icon icon='arrowDown' width='40' height='40' />
            </button>
          </div>
        </div>
      </div>

      <div className='discoverFormYear' >
        <legend className='discoverFormYear__legend'>Release year</legend>

        <div className='discoverFormYear__wrapper'>

          <div className='discoverFormYear__choice'>
            <span>Exact year:  </span>
            <input type='number' 
              className='discoverFormYear__input'
              value={this.state.exactYear}
              onChange={this.changeExactYear}
              onBlur={() => this.verifyReleaseYear('exactYear')}
            /> 
          </div>

          <div className='discoverFormYear__divider'>
            <span className='discoverFormYear__divideLine'>OR</span>
          </div>

          <div className='discoverFormYear__choice'>
            <span>From: </span>
            <input type='number' 
              className='discoverFormYear__input'
              value={this.state.yearFrom}
              onChange={this.changeYearFrom}
              onBlur={() => this.verifyReleaseYear('yearFrom')}
            /> 
          </div>

          <div className='discoverFormYear__choice'>
            <span>Until: </span>
            <input type='number' 
              className='discoverFormYear__input'
              value={this.state.yearUntil}
              onChange={this.changeYearUntil}
              onBlur={() => this.verifyReleaseYear('yearUntil')}
            /> 
          </div>  

        </div>
      </div>

      <div className='discoverFormCert'>
        <legend  className='discoverFormCert__legend'>Certification</legend>
        <div className='discoverFormCert__wrapper'>
          <div className='discoverFormCert__choices'>
            <button 
              className={this.classNameCert('all')}
              onClick={this.clickOnCert}
            >
              All
            </button>
            <button 
              className={this.classNameCert('g')}
              onClick={this.clickOnCert}
            >
              G
            </button>
            <button 
              className={this.classNameCert('pg')}
              onClick={this.clickOnCert}
            >
              PG
            </button>
            <button 
              className={this.classNameCert('pg-13')}
              onClick={this.clickOnCert}
            >
              PG-13
            </button>
            <button 
              className={this.classNameCert('r')}
              onClick={this.clickOnCert}
            >
              R
            </button>
            <button 
              className={this.classNameCert('nc-17')}
              onClick={this.clickOnCert}
            >
              NC-17
            </button>
          </div>
          <div className='discoverFormCert__method'>
            <button 
              className={this.classNameMethodBtn('less')}
              onClick={e => this.clickOnCertMethod('less', e)}
              disabled = {this.isMethodBtnDisabled()}
            >
              Less than or equal
            </button>
            <button 
              className={this.classNameMethodBtn('exact')}
              onClick={e => this.clickOnCertMethod('exact', e)}
              disabled = {this.isMethodBtnDisabled()}
            >
              Exactly equal
            </button>
          </div>
        </div>
      </div>

      <div className='discoverFormGenres'>
        <legend className='discoverFormGenres__legend'>
          With genres:
          <button className='discoverFormGenres__addBtn' onClick={this.clickAddGenres}  >Add</button>

          <Link 
            to={this.linkWhenSubmit()} 
            className={`discoverFormGenres__submitBtn ${this.state.genresOpen ? 'disableSubmitBtn': ''}`} 
          >
            Submit
          </Link>

        </legend>
        {this.state.genresOpen && 
          <DiscoverGenresModal 
          closeModal={this.closeGenresModal} 
          addGenres={this.addGenres}
          alreadySelected={this.state.withGenres} 
          /> 
        }
        <div className='discoverFormGenres__genresLine' >
          {this.renderGenresLine()}
        </div>
      </div>
    </form>
  }
};