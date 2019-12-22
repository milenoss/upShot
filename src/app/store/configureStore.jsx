import{ createStore, applyMiddleware} from 'redux';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from'../config/firebase';


const rrfConfig = { 
    userProfile: 'users',
    attachAuthIsReady: true, 
    useFirestoreForProfile: true,
    updateProfileOnLogin: false


}

export const configureStore = () => { 
    const middleware = [thunk.withExtraArgument({getFirebase, getFirestore})]

    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middleware),
     reactReduxFirebase(firebase, rrfConfig),
     reduxFirestore(firebase)
      );

    const store = createStore(rootReducer, composedEnhancer)

    return store;
}