import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/list.actions';
export interface ShoppingEntity {
  id: string;
  description: string;
}

export interface ListState extends EntityState<ShoppingEntity> {

}

export const initialListState: ListState = {
  ids: ['X03939'],
  entities: {
    X03939: {
      id: 'X03939',
      description: 'taco shells'
    }
  }
};

export const adapter = createEntityAdapter<ShoppingEntity>();

export const reducer = createReducer(
  initialListState,
  on(actions.itemAddedToList, (state, { entity }) => adapter.addOne(entity, state))

);
