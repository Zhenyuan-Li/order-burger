import React from 'react';

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigations from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolBar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <Navigations />
    </nav>

  </header>
);

export default toolBar;