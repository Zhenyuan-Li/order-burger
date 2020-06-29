const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export const updateBurgerState = (state, ingredient, mode) => {
  let updatedIngredient = null;
  if (mode === 'add') {
    updatedIngredient = {
      [ingredient]: state.ingredients[ingredient] + 1,
    };
  } else if (mode === 'remove') {
    updatedIngredient = {
      [ingredient]: state.ingredients[ingredient] - 1,
    };
  }
  const updatedIngredients = updatedObject(
    state.ingredients,
    updatedIngredient
  );
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[ingredient],
  };
  return updatedState;
};

export const updatedObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
