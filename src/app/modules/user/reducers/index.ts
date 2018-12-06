import {createSelector} from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import * as fromAccountNew from './account-new';
import * as fromPackageCollection from './package-collection';

export interface State {
  fromAccountNew: fromAccountNew.State;
  fromPackageCollection: fromPackageCollection.State;
}

const reducers = {
  accountNew: fromAccountNew.reducer,
  packageCollection: fromPackageCollection.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): any {
  return developmentReducer(state, action);
  // if (environment.production) {
  //   return productionReducer(state, action);
  // } else {
  //   return developmentReducer(state, action);
  // }
}
export const getAccountNewState = (state: any) => state.user.accountNew;
export const getAccountNewAccount = createSelector(getAccountNewState, fromAccountNew.getAccount);
export const getAccountNewGroup = createSelector(getAccountNewState, fromAccountNew.getGroup);
export const getAccountNewGroupMembers = createSelector(getAccountNewState, fromAccountNew.getGroupMembers);
export const getAccountNewGroupLeader = createSelector(getAccountNewState, fromAccountNew.getGroupLeader);

export const getPackageCollectionState = (state: any) => state.user.packageCollection;
export const getPackageCollectionIsLoaded = createSelector(getPackageCollectionState, fromPackageCollection.getIsLoaded);
export const getPackageCollectionIsLoading = createSelector(getPackageCollectionState, fromPackageCollection.getIsLoading);
export const getPackageCollectionItems = createSelector(getPackageCollectionState, fromPackageCollection.getItems);

