import React, { Component } from 'react';

import DetailsPrimary from '../DetailsPrimary';
import DetailsMedia from '../DetailsMedia';
import DetailsRecommendations from '../DetailsRecommendations';
import DetailsSimilar from '../DetailsSimilar';
import LoadingSpinner from '../LoadingSpinner';

export default class DetailsPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      rendering: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
      (async () => {
      await Promise.all([
        this.props.fetchDetails(id),
        this.props.fetchCastAndCrew(id),
        this.props.fetchKeywords(id),
        this.props.fetchSimilarMovies(id),
        this.props.fetchMovieImages(id),
        this.props.fetchMovieVideos(id),
        this.props.fetchMovieReviews(id)
      ]);
      this.setState({rendering:true});
    })();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.rendering !== nextState.rendering;
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.match.params;
    const nextId = nextProps.match.params.id;
    
    if (id!==nextId) {
      (async () => {
        await this.setState({rendering:false});
        await Promise.all([
          this.props.fetchDetails(nextId),
          this.props.fetchCastAndCrew(nextId),
          this.props.fetchKeywords(nextId),
          this.props.fetchSimilarMovies(nextId),
          this.props.fetchMovieImages(nextId),
          this.props.fetchMovieVideos(nextId),
          this.props.fetchMovieReviews(nextId)
        ]);
        this.setState({rendering:true});
      })();
    };
  };
  
  
  renderPage() {
    const { id } = this.props.match.params;
    const {details, primaryCrew, primaryCast, movieVideos,
      movieImages, keywords, similarMovies} = this.props;
    return (
      <div className='details' >
        <DetailsPrimary 
        details={details} 
        primaryCrew={primaryCrew}
        primaryCast={primaryCast}
        />
        <DetailsMedia 
          movieImages={movieImages}
          movieVideos={movieVideos}
        />
        <DetailsSimilar 
          keywords={keywords}
          similarMovies={similarMovies}
        />
        <DetailsRecommendations id={id} />
      </div>
    )
  };

  renderLoading() {
    return (
      <div className='detailsSpinnerWrapper' >
        <LoadingSpinner />
      </div>
    );
  }

  render() {
    return this.state.rendering ? this.renderPage() : this.renderLoading();
  }
};



