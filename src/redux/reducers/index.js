import { combineReducers } from 'redux';
import handleProducts from './product.reducers';
import handleAuth from './auth.reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducers = combineReducers({
  handleProducts,
  handleAuth,
  firebaseReducer,
  firestoreReducer
})

export default rootReducers