// @flow

import { CLICK_ME_INCREASE } from './constant';

const initialState = {
  counter: 0,
};

export default function reducer(state: AccountStoreType = initialState, action: ActionType) {
  switch (action.type) {
    case CLICK_ME_INCREASE:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
