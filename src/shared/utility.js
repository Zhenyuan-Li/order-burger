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
    building: true,
  };
  return updatedState;
};

export const updatedObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.minLength && isValid;
  }
  return isValid;
};
