import React from 'react';

const YoutubeVideoList = ({ videos, chooseVideo }) => {
  const renderList = videos.map(video => {
    return (
      <button
        className='youtubeVideoList__item'
        key={video.id} 
        onClick={() => chooseVideo(video.key)} 
      >
        {video.name}
      </button>
    );
  });
  return (
    <div className='youtubeVideoList'>
      <h3 className='youtubeVideoList__title'>List of available videos</h3>
      <div className='youtubeVideoList__list'>
        {renderList}
      </div>
    </div>
  );
};

export default YoutubeVideoList;