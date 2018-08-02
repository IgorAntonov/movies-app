import React, { Component } from 'react';
import Youtube from 'react-youtube';

import YoutubeVideoList from '../YoutubeVideoList';


export default class YoutubeVideo extends Component  {
  constructor(props) {
    super(props);
    this.state = {key: this.props.videos[0].key};

    this.chooseVideoClick = this.chooseVideoClick.bind(this);
  }

  chooseVideoClick(videoKey) {
    this.setState({
      key: videoKey
    });
  }
  
  render() {
    const opts = {
      height: '360',
      width: '640',
      autoplay: 0
    };
    return (
      <div className='youtubeVideo'>
          <YoutubeVideoList 
            videos={this.props.videos}
            chooseVideo={this.chooseVideoClick}
          />
          <div className='youtubeVideo__wrapper'>
            <Youtube 
              videoId={this.state.key}
              className='youtubeVideo__player'
              opts = {opts}
            />       
          </div>
      </div>
    );
  }
};


