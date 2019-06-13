import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';
export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

const selectCounterBranch = (state: State) => state.counter;

export const selectCurrentCount = createSelector(selectCounterBranch, x => x.current);
export const selectAtZero = createSelector(selectCounterBranch, x => x.current === 0);
export const selectCountBy = createSelector(selectCounterBranch, x => x.by);
export const selectDecrementDisabled = createSelector(selectCounterBranch, x => x.current - x.by < 0);
