import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
  const { show, clicked } = props;
  return show ? (
    <div
      className={classes.Backdrop}
      onClick={clicked}
      onKeyPress={clicked}
      role="presentation"
    />
  ) : null;
};

export default backdrop;
