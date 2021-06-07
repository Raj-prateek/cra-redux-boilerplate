// @flow

import { combineReducers, type Reducer } from 'redux';

import { reducer as entity } from './Entity';

export default function createReducer(asyncReducers: { [string]: Reducer<*, *> }) {
  return combineReducers({
    ...asyncReducers,
    entity,
  });
}
