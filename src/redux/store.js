import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { reducer } from './reducer';

const rootReducer = combineReducers({
    reducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
