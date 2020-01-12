import { all } from 'redux-saga/effects';
import { counterEffects } from './counter.effects';
import { testEffects } from '../components/test/test.effects';


export function* rootSaga() {
    yield all([
        ...counterEffects,
        ...testEffects
    ])
}