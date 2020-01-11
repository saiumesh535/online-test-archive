import { createStore, Store, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { counterReducer } from './reducer-sample/counter.reducer';
import { SagaMiddleware } from 'redux-saga';

export interface AppState {
    counter: number;
}


function getReducers() {
    return combineReducers<AppState>({
        counter: counterReducer
    });
}

export function configureStore(saga: SagaMiddleware): Store {
    const middlewares = [logger, saga];
    return createStore(getReducers(), applyMiddleware(...middlewares));
}