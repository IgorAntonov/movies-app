import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './features/Header';
import {
  MoviesByQuery,
  DetailsPage,
  PersonPage,
  MoviesByKeywords,
  GenreMovies,
  PopularMovies,
  TopMovies,
  UpcomingMovies,
  PersonByQuery
} from './pages';
import Recommendations from './components/Recommendations';
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
      <Route path="/top" component={TopMovies} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/genres/:id" component={GenreMovies} />
      <Route path="/keyword/:name/:id" component={MoviesByKeywords} />
      <Route path="/person/:id" component={PersonPage} />
      <Route path="/discover/:sort/:date/:cert/:genres" component={DiscoverList} />
      <Route path="/" component={DiscoverMovies} />
    </Switch>
  </div>
);
