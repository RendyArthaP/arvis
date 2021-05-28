import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Config from '../utils/Firebase';

export default createStore(rootReducers, 
  compose (
    applyMiddleware(thunk.withExtraArgument({
      getFirestore, 
      getFirebase
    })),
    reduxFirestore(Config),
    reactReduxFirebase(Config)
  )
)