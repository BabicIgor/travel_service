import {Action} from '@ngrx/store';
import * as models from '../models';

export const LOGIN = '[Authentication] Load';
export const LOGIN_SUCCESS = '[Authentication] Load Success';
export const LOGIN_FAIL = '[Authentication] Load Fail';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: models.Credentials) {
  }
}

export class LoginSuccessPayload {
  accessToken: string;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: LoginSuccessPayload) {
  }
}

export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
}

export type Actions = LoginAction
  | LoginFailAction
  | LoginSuccessAction;
