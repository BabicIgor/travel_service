import {createSelector} from 'reselect';
import {ActionReducer} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {combineReducers} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {EnvironmentEnum} from '../../environments/environment.interface';

import * as fromBooking from '../modules/booking/reducers';
import * as fromCore from '../core/reducers';
import * as fromUser from '../modules/user/reducers';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  booking: fromBooking.State;
  core: fromCore.State;
  user: fromUser.State;
  router: fromRouter.RouterState;
}

const reducers = {
  booking: fromBooking.reducer,
  core: fromCore.reducer,
  user: fromUser.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.environment === EnvironmentEnum.PRODUCTION) {
    return productionReducer(state, action);
  }  else {
    return developmentReducer(state, action);
  }
}

// export const getShuttleState = (state: State) => state.shuttle;

// export const getCollectionLoaded = createSelector(getCollectionState, fromCollection.getLoaded);
// export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
// export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);
//
// export const getBookCollection = createSelector(getBookEntities, getCollectionBookIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });
//
// export const isSelectedBookInCollection = createSelector(getCollectionBookIds, getSelectedBookId, (ids, selected) => {
//   return ids.indexOf(selected) > -1;
// });
