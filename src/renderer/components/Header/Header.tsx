import * as React from 'react';

import * as style from './Header.module.scss';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className={style.header}>
    <h1 className={style.title}>{title}</h1>
  </header>
);

Header.displayName = 'Header';

export default Header;
