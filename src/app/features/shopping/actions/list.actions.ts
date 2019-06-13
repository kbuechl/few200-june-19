import { createAction, props } from '@ngrx/store';

let currentTempId = 0;
export const itemAddedToList = createAction(
  '[shopping/list] item added',
  ({ description }: { description: string }) => {
    return {
      entity: {
        id: 'Temp-' + currentTempId++,
        description
      }
    };
  }
);
