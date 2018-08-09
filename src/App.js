import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './features/Header';
import { Footer } from './ui/Footer';
import { ScrollToTop } from './features/ScrollToTop';

import {
  MoviesByQuery,
  DetailsPage,
  PersonPage,
  MoviesByKeywords,
  GenreMovies,
  PopularMovies,
  TopMovies,
  UpcomingMovies,
  PersonByQuery,
  Recommendations,
  DiscoverMovies,
  SearchPage,
  NotFound
} from './pages';


export const App = () => (
  <div className="app">
    <Header />
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/search/movies/:query" component={MoviesByQuery} />
      <Route exact path="/search/people/:query" component={PersonByQuery} />
      <Route exact path="/recommendations/:id" component={Recommendations} />
      <Route exact path="/movies/:id" component={DetailsPage} />
      <Route exact path="/top" component={TopMovies} />
      <Route exact path="/popular" component={PopularMovies} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/genres/:id" component={GenreMovies} />
      <Route exact path="/keyword/:name/:id" component={MoviesByKeywords} />
      <Route exact path="/person/:id" component={PersonPage} />
      <Route exact path="/discover/:sort/:date/:cert/:genres" component={DiscoverMovies} />
      <Route path="" component={NotFound} />
    </Switch>
    <Footer />
  </div>
);
