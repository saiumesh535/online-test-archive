import { questionReducer } from './../components/question/question.reducer';
import { testReducer } from '../components/test/test.reducers';
import { TestState, QuestionState } from './../types/common.types';
import { createStore, Store, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { counterReducer } from './reducer-sample/counter.reducer';
import { SagaMiddleware } from 'redux-saga';

export interface AppState {
    counter: number;
    testState: TestState;
    questionState: QuestionState;
}


function getReducers() {
    return combineReducers<AppState>({
        counter: counterReducer,
        testState: testReducer,
        questionState: questionReducer

    });
}

export function configureStore(saga: SagaMiddleware): Store {
    const middlewares = [logger, saga];
    return createStore(getReducers(), applyMiddleware(...middlewares));
}