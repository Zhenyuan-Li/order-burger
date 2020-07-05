import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const { show, clicked } = props;
  return show ? (
    <div
      className="backdrop"
      onClick={clicked}
      onKeyPress={clicked}
      role="presentation"
    />
  ) : null;
};

export default backdrop;
