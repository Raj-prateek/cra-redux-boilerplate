// @flow

export function getClickCountsSelector(state: StoreType): int {
  return state.entity.counter;
}

export default {
  getClickCountsSelector,
};
