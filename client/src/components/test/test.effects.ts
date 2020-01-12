import { testAPI } from './../../api/http';
import { takeLatest, select } from 'redux-saga/effects';
import { CREATE_TEST } from './test.actions';
import { selectTestName, selectTestTimer, selectTestCutoff } from './test.selectors';

function* createTestEffect (){
  try{
    const testName = yield select(selectTestName);
    const testTimer = yield select(selectTestTimer);
    const testCutOff = yield select(selectTestCutoff);
    yield testAPI({
      name: testName,
      timer: testTimer,
      cutoff: testCutOff
    });
    console.log('inserted Test');
  } catch(e) {
    console.error('error while inserting Test ', e);
  }

}

export const testEffects = [
  takeLatest(CREATE_TEST, createTestEffect)
]