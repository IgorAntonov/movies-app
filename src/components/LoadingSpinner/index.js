import React from 'react';

const LoadingSpinner = props => {
  return (
    <svg className='loadingSpinner' width="65px" height="65px" viewBox="0 0 66 66">
      <circle className='loadingSpinner__path' fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  );
};

export default LoadingSpinner;