declare var require: any
import {Component, ViewEncapsulation} from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router
} from '@angular/router';
import {Store} from '@ngrx/store';

import * as layoutActions from '../../actions/layout';
import * as systemActions from '../../actions/system';
import * as reducers from '../../reducers';
import * as models from '../../models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import * as services from '../../services';
import * as  userServiceDataContracts from '../../services/user/contracts/data-contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public isAppView$: Observable<boolean>;
  public isFullHeightView$: Observable<boolean>;
  public isLoading$: Observable<boolean>;
  public user$: Observable<models.User>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<any>,
              private userService: services.UserService) {

    this.isAppView$ = this.store.select(reducers.getLayoutIsAppView);
    this.isFullHeightView$ = this.store.select(reducers.getLayoutIsFullHeightView);
    this.isLoading$ = this.store.select(reducers.getLayoutIsLoading);
    this.user$ = this.store.select(reducers.getUserUser);

    this.activatedRoute.params.take(1).subscribe((params: any) => {
      // debugger;
      // if ('debug' in params) {
      // this.store.dispatch(new systemActions.SetDebugAction(true));
      // }
    });

    // router.events.subscribe((event: RouterEvent) => {
    //   this.navigationInterceptor(event);
    // });
  }

  private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.store.dispatch(new layoutActions.ShowSpinnerAction());
    }

    if (event instanceof NavigationEnd) {
      this.store.dispatch(new layoutActions.HideSpinnerAction());
    }

    if (event instanceof NavigationCancel) {
      this.store.dispatch(new layoutActions.HideSpinnerAction());
    }

    if (event instanceof NavigationError) {
      this.store.dispatch(new layoutActions.HideSpinnerAction());
    }
  }

  public closeSidenav(): void {
    // this.store.dispatch(new layoutActions.CloseSidenavAction());
  }

  public openSidenav(): void {
    // this.store.dispatch(new layoutActions.OpenSidenavAction());
  }

  public signOut(): void {
    this.userService.signOut(new userServiceDataContracts.SignOutRequest())
      .take(1)
      .subscribe(() => {
        location.reload();
      });
  }
}
