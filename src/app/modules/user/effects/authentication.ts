// import {Injectable} from '@angular/core';
// import {Effect, Actions} from '@ngrx/effects';
// import {Action} from '@ngrx/store';
//
// import * as actions from '../actions/authentication';
// import * as contracts from '../services/offer/contracts';
// import * as services from '../services';
//
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/takeUntil';
// import {empty} from 'rxjs/observable/empty';
// import {of} from 'rxjs/observable/of';
// import {Observable} from 'rxjs/Observable';
//
// @Injectable()
// export class AuthenticationEffects {
//
//   @Effect()
//   login$: Observable<Action> = this.actions$
//     .ofType(actions.LOGIN)
//     .switchMap((payload) => {
//         const request = new contracts.OfferListRequest();
//
//         return this.identityService.authorize(request)
//           .map(serviceResponse => {
//             const loginSuccessPayload = new actions.LoginSuccessPayload();
//             return new actions.LoginSuccessAction(loginSuccessPayload);
//           })
//           .catch(() => of(new actions.LoginFailAction()));
//       }
//     );
//
//   constructor(private actions$: Actions,
//               private identityService: services.IdentityService) {
//   }
// }
