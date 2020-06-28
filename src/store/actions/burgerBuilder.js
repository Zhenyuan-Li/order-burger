import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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
  return (dispatch) => {
    axios
      .get('https://react-burger-94d69.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch(() => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

export { addIngredient, removeIngredient, initIngredients };
