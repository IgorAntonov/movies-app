import React from 'react';

import { DiscoverForm } from '../../features/DiscoverForm';

export const SearchPage = () => (
  <div className="discover">
    <h2 className="discover__title">
      Discover every movie, that you want!
    </h2>
    <div className="discover__formWrapper">
      <DiscoverForm />
    </div>
  </div>
);
