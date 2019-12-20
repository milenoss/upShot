
import{combineReducers} from 'redux';
import{reducer as ToastrReducer} from 'react-redux-toastr';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form'
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth1/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer

})

export default rootReducer;