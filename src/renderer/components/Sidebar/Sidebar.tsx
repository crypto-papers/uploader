import * as React from 'react';
import { FileText, Search, Settings } from 'react-feather';

import logo from '../../../static/assets/plume_color.svg';

import './Sidebar.module.scss';

const Sidebar: React.FC = () => (
  <aside styleName="sidebar">
    <img alt="" src={logo} styleName="logo" />
    <nav styleName="nav">
      <ul styleName="menu">
        <li styleName="menuItem">
          <Search size={48} styleName="icon" />
          Search For Paper
        </li>
        <li styleName="menuItem active">
          <FileText size={48} styleName="icon" />
          Add/Edit Paper
        </li>
        <li styleName="menuItem">
          <Settings size={48} styleName="icon" />
          Settings
        </li>
      </ul>
    </nav>
  </aside>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
