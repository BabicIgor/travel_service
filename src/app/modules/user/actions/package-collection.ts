import {Action} from '@ngrx/store';
import * as models from '../models';

export const LOAD = '[Package Collection] Load';
export const LOAD_SUCCESS = '[Package Collection] Load Success';
export const LOAD_FAIL = '[Package Collection] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessPayload {
  public data: Array<models.Package>;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: LoadSuccessPayload) {
  }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;
}

export type Actions = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
