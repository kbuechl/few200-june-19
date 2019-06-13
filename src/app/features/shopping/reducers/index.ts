import * as fromList from './shopping.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItem } from '../../models';
export const featureName = 'shopping';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// 1 create feature selector
const selectFeature = createFeatureSelector<State>(featureName);
// 2 create a selector per branhc
const selectListBranch = createSelector(selectFeature, f => f.list);
// 3 helpers?
const { selectAll: selectAllShoppingEntities } = fromList.adapter.getSelectors(selectListBranch);
// object destructuring


// 4. what does the component need?

// list component needs shopping item[]
export const selectShoppingItems = createSelector(selectAllShoppingEntities, s => s as ShoppingItem[]);