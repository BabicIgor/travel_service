import * as actions from '../actions/account-new';
import * as models from '../models';

import * as _ from 'lodash';

export interface State {
  account: models.Account;
  group: models.Group;
}

const initialState: State = {
  account: new models.Account(),
  group: new models.Group()
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.SET_ACCOUNT: {
      return Object.assign({}, state, {
        account: action.payload
      });
    }

    case actions.SET_GROUP: {
      const group = _.cloneDeep(action.payload);

      group.members = new Array(Number(group.groupSize));

      for (let i = 0; i < Number(group.groupSize); i++) {
        group.members[i] = new models.GroupMember();
      }

      return {...state, group};
    }

    case actions.SET_GROUP_LEADER: {
      const group = _.cloneDeep(state.group);
      group.leader = action.payload;

      return Object.assign({}, state, {
        group
      });
    }

    case actions.SET_GROUP_MEMBERS: {
      const group = _.cloneDeep(state.group);
      group.members = action.payload;

      return Object.assign({}, state, {
        group
      });
    }

    default: {
      return state;
    }
  }
}

export const getAccount = (state: State) => state.account;
export const getGroup = (state: State) => state.group;
export const getGroupMembers = (state: State) => state.group.members;
export const getGroupLeader = (state: State) => state.group.leader;
