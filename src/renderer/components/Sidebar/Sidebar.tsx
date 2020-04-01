import * as React from 'react';
import { FileText, Search, Settings } from 'react-feather';

import logo from '../../../static/assets/plume_color.svg';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => (
  <aside className={s.sidebar}>
    <img alt="" className={s.logo} src={logo} />
    <nav className={s.nav}>
      <ul className={s.menu}>
        <li className={s.menuItem}>
          <Search className={s.icon} size={48} />
          Search For Paper
        </li>
        <li className={`${s.menuItem} ${s.active}`}>
          <FileText className={s.icon} size={48} />
          Add/Edit Paper
        </li>
        <li className={s.menuItem}>
          <Settings className={s.icon} size={48} />
          Settings
        </li>
      </ul>
    </nav>
  </aside>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
