import React from 'react';
import PropTypes from 'prop-types';

export const FormYear = ({
  exactYear,
  yearFrom,
  yearUntil,
  verifyReleaseYear,
  changeExactYear,
  changeYearFrom,
  changeYearUntil
}) => (
  <div className="discoverFormYear">
    <legend className="discoverFormYear__legend">Release year</legend>
    <div className="discoverFormYear__wrapper">
      <div className="discoverFormYear__choice">
        <span>Exact year:  </span>
        <input
          type="number"
          className="discoverFormYear__input"
          value={exactYear}
          onChange={changeExactYear}
          onBlur={() => verifyReleaseYear('exactYear')}
        />
      </div>

      <div className="discoverFormYear__divider">
        <span className="discoverFormYear__divideLine">OR</span>
      </div>

      <div className="discoverFormYear__choice">
        <span>From: </span>
        <input
          type="number"
          className="discoverFormYear__input"
          value={yearFrom}
          onChange={changeYearFrom}
          onBlur={() => verifyReleaseYear('yearFrom')}
        />
      </div>

      <div className="discoverFormYear__choice">
        <span>Until: </span>
        <input
          type="number"
          className="discoverFormYear__input"
          value={yearUntil}
          onChange={changeYearUntil}
          onBlur={() => verifyReleaseYear('yearUntil')}
        />
      </div>
    </div>
  </div>
);

FormYear.propTypes = {
  exactYear: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  yearFrom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  yearUntil: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  verifyReleaseYear: PropTypes.func.isRequired,
  changeExactYear: PropTypes.func.isRequired,
  changeYearFrom: PropTypes.func.isRequired,
  changeYearUntil: PropTypes.func.isRequired
};
