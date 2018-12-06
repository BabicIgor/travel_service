import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import {Store} from '@ngrx/store';

import * as models from '../models';
import * as reducers from '../reducers';

import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserIsAuthenticatedGuard implements CanActivate {
  constructor(private store$: Store<any>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store$.select(reducers.getUserUser)
      .switchMap((user: models.User) => {
        if (user !== null) {
          return of(true);
        }

        this.router.navigate(['/login']);

        return of(false);
      });
  }
}
