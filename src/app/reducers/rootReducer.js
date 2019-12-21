
import{combineReducers} from 'redux';
import{reducer as ToastrReducer} from 'react-redux-toastr';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form'
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth1/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;