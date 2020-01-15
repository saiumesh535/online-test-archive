import { all } from 'redux-saga/effects';
import { counterEffects } from './counter.effects';
import { testEffects } from '../components/test/test.effects';
import { questionEffects } from '../components/question/question.effect';


export function* rootSaga() {
    yield all([
        ...counterEffects,
        ...testEffects,
        ...questionEffects
    ])
}