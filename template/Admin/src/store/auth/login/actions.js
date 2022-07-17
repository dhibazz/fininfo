import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./actionTypes";

import AuthService from "./auth.Service";
export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};


export const login = (username, password) => (dispatch) => {
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
};
fetch('http://localhost:8080/api/auth/signin', requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
if(data.roles[0]==="ROLE_MODERATOR"){
  window.location.replace("http://localhost:3000/dashboard");
}

if(data.roles[0]==="ROLE_USER"){
  window.location.replace("http://localhost:3000/pages-timeline");
}

      }

      return data;
    }
    );
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.LOGIN_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
};




export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};