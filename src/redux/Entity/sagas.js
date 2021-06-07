// @flow

import { takeEvery, put } from 'redux-saga/effects';
import { type Saga } from 'redux-saga';
import { CLICK_ME } from './constant';
import { incrementClickCount } from './actions';

export function* checkAuthentionRequest(): Saga<*> {
  yield put(incrementClickCount());
}

export default function* entitySagas(): Saga<*> {
  yield takeEvery(CLICK_ME, checkAuthentionRequest);
}
