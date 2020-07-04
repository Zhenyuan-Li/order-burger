import * as actionTypes from './actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
};

const logout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const auth = (email, password, isSignup) => {
  return {
    type: actionTypes.AUTH_USER,
    email,
    password,
    isSignup,
  };
};

const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path,
  };
};

const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_INITIAL_STATE,
  };
};

export {
  auth,
  authSuccess,
  authFail,
  authStart,
  checkAuthTimeout,
  logout,
  logoutSucceed,
  setAuthRedirectPath,
  authCheckState,
};
