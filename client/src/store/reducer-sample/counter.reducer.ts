import { createReducer, createAction } from '@reduxjs/toolkit';
import { AppState } from '..';

export const increaseCounter = createAction<number>('INCREASE_COUNTER');
export const increaseCounterEffect = createAction<number>('INCREASE_COUNTER_EFFECT');
export const resetCounter = createAction('RESET_COUNTER');

export const counterInitialState = 0;

export const selectCounter = (state: AppState) => state.counter;


export const counterReducer = createReducer<number>(counterInitialState, (builder) => {
    builder
    .addCase(increaseCounter, (state, action) => {
        return state + action.payload
    })
    .addCase(resetCounter, (state, action) => {
        return counterInitialState
    })
});
