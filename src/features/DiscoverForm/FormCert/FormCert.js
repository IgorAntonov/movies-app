import React from 'react';
import PropTypes from 'prop-types';

export const FormCert = ({
  classNameCert,
  clickOnCert,
  classNameMethodBtn,
  clickOnCertMethod,
  isMethodBtnDisabled
}) => (
  <div className="discoverFormCert">
    <legend className="discoverFormCert__legend">Certification</legend>
    <div className="discoverFormCert__wrapper">
      <div className="discoverFormCert__choices">
        <button
          className={classNameCert('all')}
          onClick={clickOnCert}
          type="button"
        >
          All
        </button>
        <button
          className={classNameCert('g')}
          onClick={clickOnCert}
          type="button"
        >
          G
        </button>
        <button
          className={classNameCert('pg')}
          onClick={clickOnCert}
          type="button"
        >
          PG
        </button>
        <button
          className={classNameCert('pg-13')}
          onClick={clickOnCert}
          type="button"
        >
          PG-13
        </button>
        <button
          className={classNameCert('r')}
          onClick={clickOnCert}
          type="button"
        >
          R
        </button>
        <button
          className={classNameCert('nc-17')}
          onClick={clickOnCert}
          type="button"
        >
          NC-17
        </button>
      </div>
      <div className="discoverFormCert__method">
        <button
          className={classNameMethodBtn('less')}
          onClick={e => clickOnCertMethod('less', e)}
          disabled={isMethodBtnDisabled()}
          type="button"
        >
          Less than or equal
        </button>
        <button
          className={classNameMethodBtn('exact')}
          onClick={e => clickOnCertMethod('exact', e)}
          disabled={isMethodBtnDisabled()}
          type="button"
        >
          Exactly equal
        </button>
      </div>
    </div>
  </div>
);

FormCert.propTypes = {
  classNameCert: PropTypes.func.isRequired,
  clickOnCert: PropTypes.func.isRequired,
  classNameMethodBtn: PropTypes.func.isRequired,
  clickOnCertMethod: PropTypes.func.isRequired,
  isMethodBtnDisabled: PropTypes.func.isRequired
};
