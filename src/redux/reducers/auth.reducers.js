import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS
} from '../actions/auth.actions.js';

const initialState = {
  authError: null,
  isLogged: false
}

const handleAuth = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authError: null,
        isLogged: false
      }
    case LOGIN_SUCCESS:
      console.log('login success')
      return {
        ...state,
        authError: null,
        isLogged: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed!',
        isLogged: false
      }
    case LOGOUT_SUCCESS:
      console.log('logout success')
      return state
    default:
      return state
  }
}

export default handleAuth