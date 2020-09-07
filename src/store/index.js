import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './../reducer';
import thunk from 'redux-thunk';


const initialState={
    city: 'Buenos Aires,ar'
    
};



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));