import {Action} from '@ngrx/store';

export const ActionTypes = {
  OPEN_SIDE_NAV: '[Layout] Open Sidenav',
  CLOSE_SIDE_NAV: '[Layout] Close Sidenav',

  ACTIVATE_APP_VIEW: '[Layout] Activate AppView',
  DEACTIVATE_APP_VIEW: '[Layout] Deactivate AppView',

  ACTIVATE_FULL_HEIGHT_VIEW: '[Layout] Activate FullHeightView',
  DEACTIVATE_FULL_HEIGHT_VIEW: '[Layout] Deactivate FullHeightView',

  SHOW_SPINNER: '[Layout] Show Spinner',
  HIDE_SPINNER: '[Layout] Hide Spinner'
};

export class OpenSideNavAction implements Action {
  type = ActionTypes.OPEN_SIDE_NAV;
}

export class CloseSideNavAction implements Action {
  type = ActionTypes.CLOSE_SIDE_NAV;
}

export class ActivateAppViewAction implements Action {
  type = ActionTypes.ACTIVATE_APP_VIEW
}

export class ActivateFullHeightViewAction implements Action {
  type = ActionTypes.ACTIVATE_FULL_HEIGHT_VIEW;
}

export class DeactivateFullHeightViewAction implements Action {
  type = ActionTypes.DEACTIVATE_FULL_HEIGHT_VIEW;
}

export class DeactivateAppViewAction implements Action {
  type = ActionTypes.DEACTIVATE_APP_VIEW;
}

export class ShowSpinnerAction implements Action {
  type = ActionTypes.SHOW_SPINNER
}

export class HideSpinnerAction implements Action {
  type = ActionTypes.HIDE_SPINNER
}

export type Actions =
  OpenSideNavAction
  | CloseSideNavAction

  | ActivateAppViewAction
  | DeactivateAppViewAction

  | ActivateFullHeightViewAction
  | DeactivateFullHeightViewAction

  | ShowSpinnerAction
  | HideSpinnerAction;
