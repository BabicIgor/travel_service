import * as actions from '../actions/layout';

export interface State {
  isAppView: boolean;
  isFullHeightView: boolean;
  isLoading: boolean;
}

const initialState: State = {
  isAppView: false,
  isFullHeightView: false,
  isLoading: false
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.CLOSE_SIDE_NAV:
      return Object.assign({}, state, {
        isAppView: false
      });

    case actions.ActionTypes.OPEN_SIDE_NAV:
      return Object.assign({}, state);

    case actions.ActionTypes.ACTIVATE_APP_VIEW:
      return Object.assign({}, state, {
        isAppView: true
      });

    case actions.ActionTypes.ACTIVATE_FULL_HEIGHT_VIEW:
      return Object.assign({}, state, {
        isFullHeightView: true
      });

    case actions.ActionTypes.DEACTIVATE_APP_VIEW:
      return Object.assign({}, state, {
        isAppView: false
      });

    case actions.ActionTypes.DEACTIVATE_FULL_HEIGHT_VIEW:
      return Object.assign({}, state, {
        isFullHeightView: false
      });

    case actions.ActionTypes.SHOW_SPINNER:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actions.ActionTypes.HIDE_SPINNER:
      return Object.assign({}, state, {
        isLoading: false
      });

    default:
      return state;
  }
};

export const getIsAppView = (state: State) => state.isAppView;
export const getIsFullHeightView = (state: State) => state.isFullHeightView;
export const getIsLoading = (state: State) => state.isLoading;
