import * as actionTypes from './actionTypes';

const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};

export {
  addIngredient,
  setIngredients,
  fetchIngredientsFailed,
  removeIngredient,
  initIngredients,
};
