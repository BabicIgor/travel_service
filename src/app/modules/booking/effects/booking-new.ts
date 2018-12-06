import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import * as actions from '../actions/booking-new';
// import * as contracts from '../services/identity/contracts';
import * as models from '../domain/models';
import * as reducers from '../../user/reducers';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
// import * as identityServiceContracts from '../services/identity/contracts';

@Injectable()
export class BookingNewEffects {
    
    /*
    @Effect()
    customPackageAddItem$: Observable<Action> = this.actions$
        .ofType(actions.SET_ACCOMMODATION)
        .withLatestFrom(reducers.u)
        .switchMap(action => {
                const p: models.Accommodation = action.payload;

                const item = new models.AccommodationCustomPackageItem();
                item.accommodation = p;



            }
        );*/

    constructor(private actions$: Actions) {
    }
}
