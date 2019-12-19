
import{combineReducers} from 'redux'
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import {reducer as FormReducer} from 'redux-form'
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth1/authReducer';
const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;