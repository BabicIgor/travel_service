import {createSelector} from 'reselect';
import {compose} from '@ngrx/core/compose';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {environment} from '../../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';

import * as fromLayout from './layout';
import * as fromSystem from './system';
import * as fromUser from './user';

import {EnvironmentEnum} from '../../../environments/environment.interface';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterState;
  system: fromSystem.State;
  user: fromUser.State;
}

const reducers = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
  system: fromSystem.reducer,
  user: fromUser.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.environment === EnvironmentEnum.PRODUCTION) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Layout Reducers
 */
export const getLayoutState = (state: any) => state.core.layout;
export const getLayoutIsAppView = createSelector(getLayoutState, fromLayout.getIsAppView);
export const getLayoutIsFullHeightView = createSelector(getLayoutState, fromLayout.getIsFullHeightView);
export const getLayoutIsLoading = createSelector(getLayoutState, fromLayout.getIsLoading);

/**
 * System Reducers
 */
export const getSystemState = (state: any) => state.core.system;
export const getSystemIsDebug = createSelector(getSystemState, fromSystem.getIsDebug);


/**
* User Reducers
 */
export const getUserState = (state: any) => state.core.user;
export const getUserUser = createSelector(getUserState, fromUser.getUser);
