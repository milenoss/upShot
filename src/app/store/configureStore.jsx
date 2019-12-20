import{ createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configureStore = () => { 
    const middleware = [thunk]

    const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))

    const store = createStore(rootReducer, composedEnhancer)

    return store;
}