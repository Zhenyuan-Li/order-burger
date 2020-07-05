import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
  <header className="toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="toolbar-logo">
      <Logo />
    </div>
    <nav className="desktopOnly">
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolBar;
