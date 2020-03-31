import * as React from 'react';

import logo from '../../../static/assets/plume_color.svg';
import search from '../../../static/assets/search.svg';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => (
  <aside className={s.sidebar}>
    <img alt="" className={s.logo} src={logo} />
    <nav>
      <ul className={s.menu}>
        <li className={s.menuItem}>
          <img alt="" height="20px" src={search} style={{ color: 'white' }} />
          Search For Paper
        </li>
        <li className={`${s.menuItem} ${s.active}`}>Add/Edit Paper</li>
        <li className={s.menuItem}>Settings</li>
      </ul>
    </nav>
  </aside>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
