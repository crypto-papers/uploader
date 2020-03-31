import * as React from 'react';

import * as style from './Layout.module.scss';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC = () => (
  <div className={style.layout}>
    <Header />
    <Sidebar />
    <main className={style.main}>
      <Form />
    </main>
  </div>
);

Layout.displayName = 'Layout';

export default Layout;
