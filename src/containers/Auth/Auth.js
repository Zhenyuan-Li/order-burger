import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updatedObject, checkValidity } from '../../shared/utility';
import * as actions from '../../store/actions/index';

const Auth = () => {
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const error = useSelector((state) => state.auth.error);
  const authRedirectPath = useSelector((state) => state.auth.authRedirectPath);
  const buildingBurger = useSelector((state) => state.burgerBuilder.building);

  const dispatch = useDispatch();
  const onAuth = (email, password, isSignup) =>
    dispatch(actions.auth(email, password, isSignup));
  const onSetAuthRedirectPath = useCallback(
    () => dispatch(actions.setAuthRedirectPath('/')),
    [dispatch]
  );

  const [authForm, setAuthForm] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }, [authRedirectPath, buildingBurger, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedAuthForm = updatedObject(authForm, {
      [controlName]: updatedObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });

    setAuthForm(updatedAuthForm);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (const key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }
  let form = formElementsArray.map((formElement) => {
    return (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}
      />
    );
  });

  if (loading) {
    form = <Spinner />;
  }

  let errorMessage = null;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to={authRedirectPath} />;
  }

  return (
    <div className="auth">
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">Submit</Button>
      </form>
      <Button clicked={switchAuthHandler} btnType="Danger">
        Switch To {isSignup ? 'SignIn' : 'SignUp'}
      </Button>
    </div>
  );
};

export default Auth;
