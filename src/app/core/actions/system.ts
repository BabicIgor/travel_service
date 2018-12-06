import {Action} from '@ngrx/store';

export const ActionTypes = {
  SET_DEBUG: '[System] Set Debug'
};

export class SetDebugAction implements Action {
  type = ActionTypes.SET_DEBUG

  constructor(public payload: boolean) {
  }
}

export type Actions =
  SetDebugAction;
