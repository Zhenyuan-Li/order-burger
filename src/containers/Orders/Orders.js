import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

const Orders = () => {
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  const dispatch = useDispatch();
  const onFetchOrders = useCallback(
    (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    [dispatch]
  );

  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders, token, userId]);

  let allOrders = <Spinner />;
  if (!loading) {
    allOrders = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}
      />
    ));
  }
  return <div>{allOrders}</div>;
};

export default withErrorHandler(Orders, axios);
