import {Action} from '@ngrx/store';
import * as models from '../models';

export const SET_ACCOUNT = '[Account New] Set Account';
export const SET_GROUP = '[Account New] Set Group';
export const SET_GROUP_LEADER = '[Account New] Set Group Leader';
export const SET_GROUP_MEMBERS = '[Account New] Set Group Members';

export class SetAccountAction implements Action {
  readonly type = SET_ACCOUNT;

  constructor(public payload: models.Account) {
  }
}

export class SetGroupAction implements Action {
  readonly type = SET_GROUP;

  constructor(public payload: models.Group) {
  }
}

export class SetGroupLeaderAction implements Action {
  readonly type = SET_GROUP_LEADER;

  constructor(public payload: models.GroupMember) {
    
  }
}

export class SetGroupMembersAction implements Action {
  readonly type = SET_GROUP_MEMBERS;

  constructor(public payload: Array<models.GroupMember>) {
  }
}

export type Actions = SetAccountAction
  | SetGroupAction
  | SetGroupLeaderAction
  | SetGroupMembersAction;
