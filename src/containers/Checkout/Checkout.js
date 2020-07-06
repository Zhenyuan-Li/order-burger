import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = ({ history, match }) => {
  const ingredients = useSelector((state) => state.burgerBuilder.ingredients);
  const purchased = useSelector((state) => state.order.purchased);

  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    history.replace('/checkout/contact-data');
  };

  let summary = <Redirect to="/" />;

  if (ingredients) {
    const purchasedRedirect = purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={ingredients}
          CheckoutCancelled={checkoutCancelledHandler}
          CheckoutContinued={checkoutContinuedHandler}
        />
        <Route path={`${match.path}/contact-data`} component={ContactData} />
      </div>
    );

    return summary;
  }
};

export default Checkout;
