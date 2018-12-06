import {Action} from '@ngrx/store';
import * as models from '../models';

export const LOAD = '[User] Load';
export const LOAD_SUCCESS = '[User] Load Success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: models.User) {
  }
}

export type Actions =
  LoadAction
  | LoadSuccessAction;
