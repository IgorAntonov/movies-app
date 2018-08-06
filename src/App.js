import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './features/Header';
import MoviesByQuery from './components/MoviesByQuery';
import PopularMovies from './containers/MoviesListPopular';
import TopRatedMovies from './containers/MoviesListTop';
import UpcomingMovies from './containers/MoviesListUpcoming';
import {
  DetailsPage,
  PersonPage,
  KeywordsMoviesList,
  GenreMoviesList
} from './pages';
import Recommendations from './components/Recommendations';
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
      <Route path="/genres/:id" component={GenreMoviesList} />
      <Route path="/keyword/:name/:id" component={KeywordsMoviesList} />
      <Route path="/person/:id" component={PersonPage} />
      <Route path="/discover/:sort/:date/:cert/:genres" component={DiscoverList} />
      <Route path="/" component={DiscoverMovies} />
    </Switch>
  </div>
);
