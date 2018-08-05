import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';

import { VideoList } from '../VideoList';

export class YoutubeVideo extends Component {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = {
    key: this.props.videos[0].key // eslint-disable-line
  };

  chooseVideoClick = videoKey => this.setState({
    key: videoKey
  });

  render() {
    const opts = {
      height: '360',
      width: '640',
      autoplay: 0
    };
    const { videos } = this.props;
    const { key } = this.state;
    return (
      <div className="youtubeVideo">
        <VideoList
          videos={videos}
          chooseVideo={this.chooseVideoClick}
        />
        <div className="youtubeVideo__wrapper">
          <Youtube
            videoId={key}
            className="youtubeVideo__player"
            opts={opts}
          />
        </div>
      </div>
    );
  }
}
