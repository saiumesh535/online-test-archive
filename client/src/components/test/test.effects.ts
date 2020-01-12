import { Test } from './../../types/common.types';
import { createTestAPI } from './../../api/http';
import { takeLatest, select } from 'redux-saga/effects';
import { CREATE_TEST } from './test.actions';
import { selectTestName, selectTestDuration } from './test.selectors';

function* createTestEffect (){
  try{
    const testName = yield select(selectTestName);
    const testTimer = yield select(selectTestDuration);
    yield createTestAPI({
      name: testName,
      timer: testTimer
    });
    console.log('inserted Test');
  } catch(e) {
    console.error('error while inserting Test ', e);
  }

}

export const testEffects = [
  takeLatest(CREATE_TEST, createTestEffect)
]