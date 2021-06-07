// @flow

import { CLICK_ME, CLICK_ME_INCREASE } from './constant';

export function clickMe() {
  return {
    type: CLICK_ME,
  };
}

export function incrementClickCount() {
  return {
    type: CLICK_ME_INCREASE,
  };
}
