import {Action} from '@ngrx/store';
import * as models from '../domain/models';

export const ADD_DAILY_ACTIVITY = '[Booking Now] Add Daily Activity';
// export const ADD_NIGHTLY_ACTIVITY = '[Booking Now] Add Nightly Activity';
export const SET_ACCOMMODATION = '[Booking New] Set Accommodation';
export const SET_ACCOMMODATION_SUCCESS = '[Booking New] Set Accommodation Success';
export const SET_TRANSPORTATION = '[Booking New] Set Transportation';
export const SET_TRANSPORTATION_SUCCESS = '[Booking New] Set Transportation Success';
export const SET_PACKAGE_TYPE = '[Booking New] Set Package Type';
export const SET_DESTINATION = '[Booking New] Set Destination';

export const SET_MOST_POPULAR_PACKAGE = '[Booking New] Set Most Popular Package';
export const SET_ONE_ON_ONE_PACKAGE = '[Booking New] Set One on One Package';
export const SUBMIT_ORDER = '[Booking New] Submit Order';

export class SetOneOnOnePackageAction implements Action {
    readonly type = SET_ONE_ON_ONE_PACKAGE;

    constructor(public payload: models.OneOnOnePackage) {
    }
}

export class SetMostPopularPackageAction implements Action {
    readonly type = SET_MOST_POPULAR_PACKAGE;

    constructor(public payload: models.MostPopularPackage) {
    }
}

export class AddDailyActivity implements Action {
    readonly type = ADD_DAILY_ACTIVITY;

    constructor(public payload: models.Activity) {
    }
}

// export class AddNightlyActivity implements Action {
//     readonly type = ADD_NIGHTLY_ACTIVITY;
//
//     constructor(public payload: models.Activity) {
//     }
// }

export class SetPackageTypeAction implements Action {
    readonly type = SET_PACKAGE_TYPE;

    constructor(public payload: models.PackageTypeEnum) {
    }
}
export class SetDestinationAction implements Action {
    readonly type = SET_DESTINATION;

    constructor(public payload: models.Destination) {
    }
}

export class SetAccommodationAction implements Action {
    readonly type = SET_ACCOMMODATION;

    constructor(public payload: models.Accommodation) {
    }
}

export class SetAccommodationSuccessAction implements Action {
    readonly type = SET_ACCOMMODATION_SUCCESS;

    // constructor(public payload: models.)
}

export class SetTransportationAction implements Action {
    readonly type = SET_TRANSPORTATION;

    constructor(public payload: models.Transportation) {
    }
}

export class SetTransportationSuccessAction implements Action {
    readonly type = SET_TRANSPORTATION_SUCCESS;

    // constructor(public payload: models.)
}

export class SubmitOrderAction implements Action {
    readonly type = SUBMIT_ORDER;
}

export type Actions =
    | AddDailyActivity
    // | AddNightlyActivity
    | SetAccommodationAction
    | SetDestinationAction
    | SetAccommodationSuccessAction
    | SetTransportationAction
    | SetTransportationSuccessAction
    | SetMostPopularPackageAction
    | SetOneOnOnePackageAction
    | SetPackageTypeAction;