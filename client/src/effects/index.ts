import { all } from 'redux-saga/effects';
import { counterEffects } from './counter.effects';
import { testEffects } from '../components/test/test.effects';
import { questionEffects } from '../components/question/question.effect';
import { resolverEffects } from '../components/resolver/resolver.effects';
import { collegeEffects } from '../components/college/college.effects';


export function* rootSaga() {
    yield all([
        ...counterEffects,
        ...testEffects,
        ...questionEffects,
        ...resolverEffects,
        ...collegeEffects,
    ])
}