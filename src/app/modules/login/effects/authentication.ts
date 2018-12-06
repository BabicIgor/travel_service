import {Inject, Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import * as actions from '../actions/authentication';
import * as contracts from '../services/identity/contracts';
import * as models from '../models';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import * as identityServiceContracts from '../services/identity/contracts';

@Injectable()
export class AuthenticationEffects {

    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(actions.LOGIN)
        .switchMap(action => {
            const p: models.Credentials = action.payload;

            const request = new contracts.AuthorizeRequest();
            request.user = p.user;
            request.password = p.password;
	
            return this.identityService.authorize(request)
                .map(serviceResponse => {

                    const loginSuccessPayload = new actions.LoginSuccessPayload();

                    return new actions.LoginSuccessAction(loginSuccessPayload);
                })
                .catch(() => {
                    return of(new actions.LoginFailAction());
                });
        }
    );

    constructor(private actions$: Actions,
                @Inject(identityServiceContracts.IDENTITY_SERVICE_TOKEN)
                private identityService: identityServiceContracts.IIdentityService) {
    }
}
