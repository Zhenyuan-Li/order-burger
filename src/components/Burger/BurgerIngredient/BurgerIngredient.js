import React from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

const BurgerIngredient = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case 'bread-bottom':
      ingredient = <div className="breadBottom" />;
      break;
    case 'bread-top':
      ingredient = (
        <div className="breadTop">
          <div className="seeds1" />
          <div className="seeds2" />
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className="meat" />;
      break;
    case 'salad':
      ingredient = <div className="salad" />;
      break;
    case 'bacon':
      ingredient = <div className="bacon" />;
      break;
    case 'cheese':
      ingredient = <div className="cheese" />;
      break;
    default:
      ingredient = <div />;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
