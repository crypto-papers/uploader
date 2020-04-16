import * as React from 'react';

import Form from '../Form/Form';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import './Layout.module.scss';

const Layout: React.FC = () => (
  <div styleName="layout">
    <Header title="Add Paper" />
    <Sidebar />
    <main styleName="main">
      <Form />
    </main>
  </div>
);

Layout.displayName = 'Layout';

export default Layout;
