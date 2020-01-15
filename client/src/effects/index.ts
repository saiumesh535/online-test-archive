import { all } from 'redux-saga/effects';
import { counterEffects } from './counter.effects';
import { resolverEffects } from '../components/resolver/resolver.effects';
import { collegeEffects } from '../components/college/college.effects';


export function* rootSaga() {
    yield all([
        ...counterEffects,
        ...resolverEffects,
        ...collegeEffects
    ])
}