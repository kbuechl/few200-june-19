import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[Counter] Count incremented'
);

export const countDecremented = createAction(
  '[Counter] Count Decremented');

export const countReset = createAction(
  '[Counter] Reset'
);
export const setCountBy = createAction(
  '[Counter] Set CountBy',
  props<{ by: number }>()
);
