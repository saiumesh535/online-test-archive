import { createStore, Store, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { counterReducer } from './reducer-sample/counter.reducer';
import { SagaMiddleware } from 'redux-saga';
import { ResolverState, resolverReducer } from '../components/resolver/resolver.reducer';
import { Test } from '../types/test.types';
import { testsReducer } from '../components/test/tests.reducer';

export interface AppState {
    counter: number;
    resolver: ResolverState,
    tests: Test[],
}


function getReducers() {
    return combineReducers<AppState>({
        counter: counterReducer,
        resolver: resolverReducer,
        tests: testsReducer
    });
}

export function configureStore(saga: SagaMiddleware): Store {
    const middlewares = [logger, saga];
    return createStore(getReducers(), applyMiddleware(...middlewares));
}