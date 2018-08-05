import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DetailsPrimary } from '../../features/DetailsPrimary';
import { DetailsMedia } from '../../features/DetailsMedia';
import { DetailsSimilar } from '../../features/DetailsSimilar';
import { DetailsRecommendations } from '../../features/DetailsRecommendations';
import LoadingSpinner from '../../components/LoadingSpinner';

export class DetailsPage extends Component {
  static propTypes = {
    fetchAllDetails: PropTypes.func.isRequired,
    details: PropTypes.shape({}),
    primaryCast: PropTypes.arrayOf(PropTypes.object).isRequired,
    primaryCrew: PropTypes.arrayOf(PropTypes.object).isRequired,
    movieImages: PropTypes.arrayOf(PropTypes.object).isRequired,
    movieVideos: PropTypes.arrayOf(PropTypes.object).isRequired,
    keywords: PropTypes.arrayOf(PropTypes.object).isRequired,
    similarMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      }),
    }).isRequired,
  }

  static defaultProps = {
    details: {}
  }

  state = {
    rendering: false
  };

  componentDidMount() {
    const { match, fetchAllDetails } = this.props;
    const cb = () => this.setState({ rendering: true });
    fetchAllDetails(match.params.id, cb);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { match } = this.props;
    const prevId = nextProps.match.params.id;
    const { rendering } = this.state;
    if (rendering !== nextState.rendering || match.params.id !== prevId) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps) {
    const { match, fetchAllDetails } = this.props;
    const { id } = match.params;
    const prevId = prevProps.match.params.id;
    if (id !== prevId) {
      this.setState({ rendering: false }); //eslint-disable-line
      const cb = () => this.setState({ rendering: true });
      fetchAllDetails(id, cb);
    }
  }

  render() {
    const {
      details, primaryCrew, primaryCast, movieVideos,
      movieImages, keywords, similarMovies, match
    } = this.props;
    const { rendering } = this.state;
    const { id } = match.params;

    if (!rendering) {
      return (
        <div className="detailsSpinnerWrapper">
          <LoadingSpinner />
        </div>
      );
    }
    return (
      <div className="details">
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
    );
  }
}
