import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import Header from '../../containers/ConnectedHeader';
import MoviesByQuery from '../MoviesByQuery';
import PopularMovies from '../../containers/MoviesListPopular';
import TopRatedMovies from '../../containers/MoviesListTop';
import UpcomingMovies from '../../containers/MoviesListUpcoming';
import DetailsPage from '../../containers/DetailsPage';
import Recommendations from '../Recommendations';
import GenreMovies from '../GenreMovies';
import PersonDetailsPage from '../../containers/PersonDetailsPage';
import KeywordsMoviesList from '../KeywordsMoviesList';
import PersonByQuery from '../../containers/PersonByQuery';
import DiscoverMovies from '../DiscoverMovies';
import DiscoverList from '../DiscoverList';

const App = ({ location }) => {
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="fade" appear>
          <Switch>
            <Route exact path='/search/movies/:query' component={MoviesByQuery} />
            <Route exact path='/search/people/:query' component={PersonByQuery} />
            <Route path='/recommendations/:id' component={Recommendations} />
            <Route path='/movies/:id' component={DetailsPage} />
            <Route path='/top' component={TopRatedMovies} />
            <Route path='/popular' component={PopularMovies} />
            <Route path='/upcoming' component={UpcomingMovies} />
            <Route path='/genres/:id' component={GenreMovies} />
            <Route path='/keyword/:name/:id' component={KeywordsMoviesList} />
            <Route path='/person/:id' component={PersonDetailsPage} />
            <Route path='/discover/:sort/:date/:cert/:genres' component={DiscoverList} />
            <Route path='/' component={DiscoverMovies} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}


export default withRouter(App);
