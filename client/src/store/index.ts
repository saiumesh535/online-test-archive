import { createStore, Store, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { counterReducer } from './reducer-sample/counter.reducer';

export interface AppState {
    counter: number;
}


function getReducers() {
    return combineReducers<AppState>({
        counter: counterReducer
    });
}

export function configureStore(): Store {
    const middlewares = [logger];
    return createStore(getReducers(), applyMiddleware(...middlewares));
}