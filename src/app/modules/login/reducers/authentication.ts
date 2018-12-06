import * as actions from '../actions/authentication';
import * as models from '../models';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOGIN: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }

    default: {
      return state;
    }
  }
}

export const getIsLoading = (state: State) => state.isLoading;
