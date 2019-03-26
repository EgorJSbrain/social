import { /*put*/ takeEvery } from 'redux-saga/effects';

export function* getTasksSaga() {
    yield console.log('saga')
}


export function* sagaRootSocialNetwork() {
    yield takeEvery('SET_USERS', getTasksSaga)
}