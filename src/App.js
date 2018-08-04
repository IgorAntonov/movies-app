import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/ConnectedHeader';
import MoviesByQuery from './components/MoviesByQuery';
import PopularMovies from './containers/MoviesListPopular';
import TopRatedMovies from './containers/MoviesListTop';
import UpcomingMovies from './containers/MoviesListUpcoming';
import { DetailsPage } from './pages';
import Recommendations from './components/Recommendations';
import GenreMovies from './components/GenreMovies';
import PersonDetailsPage from './containers/PersonDetailsPage';
import KeywordsMoviesList from './components/KeywordsMoviesList';
import PersonByQuery from './containers/PersonByQuery';
import DiscoverMovies from './components/DiscoverMovies';
import DiscoverList from './components/DiscoverList';

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/search/movies/:query" component={MoviesByQuery} />
      <Route exact path="/search/people/:query" component={PersonByQuery} />
      <Route path="/recommendations/:id" component={Recommendations} />
      <Route path="/movies/:id" component={DetailsPage} />
      <Route path="/top" component={TopRatedMovies} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/genres/:id" component={GenreMovies} />
      <Route path="/keyword/:name/:id" component={KeywordsMoviesList} />
      <Route path="/person/:id" component={PersonDetailsPage} />
      <Route path="/discover/:sort/:date/:cert/:genres" component={DiscoverList} />
      <Route path="/" component={DiscoverMovies} />
    </Switch>
  </div>
);
