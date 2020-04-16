import * as React from 'react';

import './Header.module.scss';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header styleName="header">
    <h1 styleName="title">{title}</h1>
  </header>
);

Header.displayName = 'Header';

export default Header;
