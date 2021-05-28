import { getFirebase } from "react-redux-firebase";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (result) => {
  return {
    type: LOGIN_SUCCESS,
    result
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export const logOutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS 
  }
}

export const loginActions = (credentials, history) => {
  return function(dispatch) {
    const firebase = getFirebase()
    dispatch(loginRequest())
    firebase
      .auth()
      .signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      .then(() => {
        // localStorage.setItem("payload", credentials.email.split("@")[0])
        dispatch(loginSuccess(credentials))
        history.push('/')
      })
      .catch((error) => dispatch(loginError(error)))
  }
}

export const logOutActions = (history) => {
  return function(dispatch) {
    const firebase = getFirebase()

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logOutSuccess())
        history.push('/')
      })
  }
}