import * as React from 'react';

import * as style from './Header.module.scss';

const Header: React.FC = () => (
  <header className={style.header}>
    <h1 className={style.title}>CryptoPapers Uploader</h1>
  </header>
);

Header.displayName = 'Header';

export default Header;
