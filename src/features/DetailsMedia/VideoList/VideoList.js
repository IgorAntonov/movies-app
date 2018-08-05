import React from 'react';
import PropTypes from 'prop-types';

export const VideoList = ({ videos, chooseVideo }) => (
  <div className="youtubeVideoList">
    <h3 className="youtubeVideoList__title">
      List of available videos
    </h3>
    <div className="youtubeVideoList__list">
      {videos.map(video => (
        <button
          className="youtubeVideoList__item"
          type="button"
          key={video.id}
          onClick={() => chooseVideo(video.key)}
        >
          {video.name}
        </button>
      ))}
    </div>
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  chooseVideo: PropTypes.func.isRequired
};
