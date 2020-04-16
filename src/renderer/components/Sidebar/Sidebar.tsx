import * as React from 'react';
import { FileText, Search, Settings } from 'react-feather';

import logo from '../../../static/assets/plume_color.svg';

import './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [selected, setSelected] = React.useState('search');

  return (
    <aside styleName="sidebar">
      <img alt="" src={logo} styleName="logo" />
      <nav styleName="nav">
        <ul styleName="menu">
          <li styleName="menu-li">
            <button
              styleName={selected === 'search' ? 'menu-item active' : 'menu-item'}
              type="button"
              onClick={(): void => setSelected('search')}
            >
              <Search size={48} styleName="icon" />
              Search For Paper
            </button>
          </li>
          <li styleName="menu-li">
            <button
              styleName={selected === 'file' ? 'menu-item active' : 'menu-item'}
              type="button"
              onClick={(): void => setSelected('file')}
            >
              <FileText size={48} styleName="icon" />
              Add/Edit Paper
            </button>
          </li>
          <li styleName="menu-li">
            <button
              styleName={selected === 'settings' ? 'menu-item active' : 'menu-item'}
              type="button"
              onClick={(): void => setSelected('settings')}
            >
              <Settings size={48} styleName="icon" />
              Settings
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
