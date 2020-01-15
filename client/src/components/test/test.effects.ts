import { history } from './../../helpers/history.helper';
import { CreateTest, Test } from './../../types/test.types';
import { testAPI } from './../../api/http';
import { takeLatest, put } from 'redux-saga/effects';
import { CREATE_TEST, createTestSuccess } from './test.actions';
import { Action } from '@reduxjs/toolkit';
import { RoutingPaths } from '../../helpers/routing.paths';

function* createTestEffect (action: Action<CreateTest>){
  const test: CreateTest = action.payload;
  try{
    const response = yield testAPI(test);
    const testSuccess: Test = {
      id: response.id,
      ...test
    }
    yield put(createTestSuccess(testSuccess));
    history.push(RoutingPaths.add_question)
  } catch(e) {
    console.error('error while inserting Test ', e);
  }

}

export const testEffects = [
  takeLatest(CREATE_TEST, createTestEffect),

]