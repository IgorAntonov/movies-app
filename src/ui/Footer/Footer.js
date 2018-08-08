import React from 'react';

import { Icon } from '../Icon';

export const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">
      © 2018 Igor Antonov
    </p>
    <div className="footer__social">
      <a className="footer__link" href="https://github.com/IgorAntonov">
        <Icon icon="github" width="24px" height="24px" viewBox="0 0 24 24" />
      </a>
      <a className="footer__link" href="https://twitter.com/IgorAntonov18">
        <Icon icon="twitter" width="24px" height="24px" viewBox="0 0 24 24" />
      </a>
      <a className="footer__link" href="https://vk.com/id18941999">
        <Icon icon="vk" width="24px" height="24px" viewBox="0 0 24 24" />
      </a>
    </div>
  </footer>
);
