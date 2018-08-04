import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { GENRES } from '../ducks/GENRES';

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.location;
  
  let subTitle = null;
  if (!/\d+$/.test(pathname)) return { subTitle };

  const id = +pathname.match( /\d+$/ )[0];
  const categoryName = pathname.match( /\w+/ )[0];

  if (categoryName === 'movies' && state.moviesById.currentDetails[id]) {
    subTitle = state.moviesById.currentDetails[id].title;
  }

  if (categoryName === 'genres') {
    subTitle = GENRES.find(element => {
      return element.id === id
    }).name;
  }

  if (categoryName === 'keyword') {
    const keywordName = pathname.match( /[a-z]+/g )[1];
    subTitle = `keyword: ${keywordName}`;
  }

  return {
    subTitle
  }
};

export default withRouter(connect(mapStateToProps)(Header));

