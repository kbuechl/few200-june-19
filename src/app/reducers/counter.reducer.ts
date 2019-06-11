import { Action } from '@ngrx/store';



export interface State {
  current: number;
}

const initialState: State = {
  current: 42
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INCREMENT': {
      return { current: state.current + 1 };
    }
    case 'DECREMENT': {
      return { current: state.current - 1 };
    }
    case 'RESET': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
