import * as actions from '../actions/user';
import * as models from '../models/user';

export interface State {
  user: models.User;
}

const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload
      });

    default:
      return state;
  }
};

export const getUser = (state: State) => state.user;
