import {createSelector} from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

// import * as fromOneOnOneCreation from './one-on-one-creation';
import * as fromBookingNew from './booking-new';

export interface State {
    // fromOneOnOneCreation: fromOneOnOneCreation.State;
    fromBookingNew: fromBookingNew.State;
}

const reducers = {
    // oneOnOneCreation: fromOneOnOneCreation.reducer
    bookingNew: fromBookingNew.reducer
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

// export const getOneOnOneCreationState = (state: any) => state.booking.oneOnOneCreation;
// export const getOneOnOneCreationOneOnOneCreation = createSelector(getOneOnOneCreationState, fromOneOnOneCreation.getOneOnOneCreation);

export const getBookingNewState = (state: any) => state.booking.bookingNew;
export const getBookingNewPackage = createSelector(getBookingNewState, fromBookingNew.getPackage);