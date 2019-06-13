import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/counter.actions';

export interface State {
  current: number;
  by: number;
}

const initialState: State = {
  current: 0,
  by: 1
};

export const reducer = createReducer(
  initialState,
  on(actions.countIncremented, (state: State) => ({ ...state, current: state.current + state.by })),
  on(actions.countDecremented, (state: State) => ({ ...state, current: state.current - state.by })),
  on(actions.setCountBy, (state, { by }) => ({ ...state, by })),
  on(actions.countReset, state => initialState)
);
