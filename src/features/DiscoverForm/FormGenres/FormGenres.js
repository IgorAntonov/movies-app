import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GenresModal } from '../GenresModal';
import Icon from '../../../components/Icon';

export const FormGenres = ({
  clickAddGenres,
  clickRemoveGenre,
  linkWhenSubmit,
  genresOpen,
  closeGenresModal,
  addGenres,
  withGenres,
  genresNames
}) => (
  <div className="discoverFormGenres">
    <legend className="discoverFormGenres__legend">
      With genres:
      <button
        className="discoverFormGenres__addBtn"
        onClick={clickAddGenres}
        type="button"
      >
        Add
      </button>
      <Link
        to={linkWhenSubmit()}
        className={`discoverFormGenres__submitBtn ${genresOpen ? 'disableSubmitBtn' : ''}`}
      >
        Submit
      </Link>
    </legend>
    {genresOpen && (
      <GenresModal
        closeModal={closeGenresModal}
        addGenres={addGenres}
        alreadySelected={withGenres}
      />
    )}
    <div className="discoverFormGenres__genresLine">
      {withGenres.length === 0 && (
        <div className="discoverFormGenres__defaultLine">
          Search all genres (by default)
        </div>
      )}
      {withGenres.length > 0 && genresNames.map(genre => (
        <div
          key={genre.id}
          className="discoverFormGenres__genresItem"
        >
          {`${genre.name}`}
          <button
            className="discoverFormGenres__closeBtn"
            onClick={() => clickRemoveGenre(genre.id)}
            type="button"
          >
            <Icon icon="close" width="20" height="20" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

FormGenres.propTypes = {
  clickAddGenres: PropTypes.func.isRequired,
  clickRemoveGenre: PropTypes.func.isRequired,
  linkWhenSubmit: PropTypes.func.isRequired,
  genresOpen: PropTypes.bool.isRequired,
  closeGenresModal: PropTypes.func.isRequired,
  addGenres: PropTypes.func.isRequired,
  withGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  genresNames: PropTypes.arrayOf(PropTypes.object).isRequired
};
