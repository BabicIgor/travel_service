import {Injectable} from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {UserService} from '../services';
import * as actions from '../actions/user';
import * as dataContracts from '../services/user/contracts/data-contracts';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserEffects {
  @Effect()
  loadAircraftList$: Observable<Action> = this.actions$
    .ofType(actions.LOAD)
    // .startWith(new actions.LoadAction())
    .map(toPayload)
    .switchMap(() => {
    debugger;

      const request = new dataContracts.GetUserRequest();

      return this.userService.getUser(request)
        .map(svcResp => {
          return new actions.LoadSuccessAction(svcResp.entity);
        });
      // .catch(() => Observable.of(new sharedCharterActions.LoadOriginAirportsFailAction()));
    });

  constructor(private actions$: Actions,
              private userService: UserService) {
  }
}
