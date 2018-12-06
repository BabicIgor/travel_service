import * as actions from '../actions/system';

export interface State {
  isDebug: boolean;
}

const initialState: State = {
  isDebug: false
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.SET_DEBUG:
      return Object.assign({}, state, {
        isDebug: true
      });

    default:
      return state;
  }
};

export const getIsDebug = (state: State) => state.isDebug;
