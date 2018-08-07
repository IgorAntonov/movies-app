import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon';

export const FormSort = ({
  classNameSortOption,
  clickOnSortOptionBtn,
  classNameSortOrder,
  clickOnSortOrderBtnDown,
  clickOnSortOrderBtnUp
}) => (
  <div className="discoverFormSort">
    <legend className="discoverFormSort__legend">Sort by</legend>
    <div className="discoverFormSort__wrapper">
      <div className="discoverFormSort__choices">
        <button
          className={classNameSortOption('popularity')}
          onClick={clickOnSortOptionBtn}
          type="button"
        >
          Popularity
        </button>
        <button
          className={classNameSortOption('rating')}
          onClick={clickOnSortOptionBtn}
          type="button"
        >
          Rating
        </button>
        <button
          className={classNameSortOption('release date')}
          onClick={clickOnSortOptionBtn}
          type="button"
        >
          Release date
        </button>
        <button
          className={classNameSortOption('alphabet')}
          onClick={clickOnSortOptionBtn}
          type="button"
        >
          Alphabet
        </button>
      </div>

      <div className="discoverFormSort__upDown">
        <button
          className={classNameSortOrder('up')}
          onClick={clickOnSortOrderBtnUp}
          type="button"
        >
          <Icon icon="arrowUp" width="40" height="40" />
        </button>
        <button
          className={classNameSortOrder('down')}
          onClick={clickOnSortOrderBtnDown}
          type="button"
        >
          <Icon icon="arrowDown" width="40" height="40" />
        </button>
      </div>
    </div>
  </div>
);

FormSort.propTypes = {
  classNameSortOption: PropTypes.func.isRequired,
  clickOnSortOptionBtn: PropTypes.func.isRequired,
  classNameSortOrder: PropTypes.func.isRequired,
  clickOnSortOrderBtnDown: PropTypes.func.isRequired,
  clickOnSortOrderBtnUp: PropTypes.func.isRequired
};
