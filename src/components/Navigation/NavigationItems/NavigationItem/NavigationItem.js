import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItems = (props) => (
  <li className="navigationItem">
    <NavLink to={props.link} activeClassName="active" exact>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItems;
