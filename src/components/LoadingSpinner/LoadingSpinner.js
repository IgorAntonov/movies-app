import React from 'react';

export const LoadingSpinner = () => (
  <svg
    className="loadingSpinner"
    width="65px"
    height="65px"
    viewBox="0 0 66 66"
  >
    <circle
      className="loadingSpinner__path"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
);
