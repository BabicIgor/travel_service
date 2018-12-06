declare var require: any

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Dispatcher, Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';


import * as actions from '../../actions/authentication';
import * as components from '../../components';
import * as models from '../../models';
import { Subscription } from 'rxjs/Subscription';
declare var jQuery: JQueryStatic;

import 'rxjs/operator/filter';
import { AuthService } from '../../services';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
    credentials: models.Credentials;

    private loginSuccessSubscription$: Subscription;
    private loginFailSubscription$: Subscription;
    errorMessage: String;

    @ViewChild(components.LoginFormComponent)
    private loginFormComponent: components.LoginFormComponent;

    constructor(private store$: Store<any>,
        private router: Router,
        private route: ActivatedRoute,
        private actions$: Actions,
        private authService: AuthService) {
        this.credentials = new models.Credentials();
        jQuery('#header #header-bar').addClass('hide');
    }

    ngOnDestroy(): void {
        if (this.loginSuccessSubscription$) {
            this.loginSuccessSubscription$.unsubscribe();
        }

        if (this.loginFailSubscription$) {
            this.loginFailSubscription$.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.loginSuccessSubscription$ = this.actions$
            .ofType(actions.LOGIN_SUCCESS)
            .subscribe(() => {
                this.router.navigate(['/booking']);
            });

        this.loginFailSubscription$ = this.actions$
            .ofType(actions.LOGIN_FAIL)
            .subscribe(() => {
                this.loginFormComponent.setInvalid();
            });
    }

    login(): void {

        const isValid = this.loginFormComponent.validate();

        if (!isValid) {
            return;
        }



        this.authService.signUserkWithObservable(this.credentials)
            .subscribe(response => {
                if (response.login == true) {
                    
                    localStorage.setItem('user_id', response.user_id)
                    localStorage.setItem('group_id', response.user_id)


                    this.router.navigate(['booking/destinations']);

                }
                else if(response.login == false)
                {   
                    alert('failed');
                }
                else{

                }
            },
        error => this.errorMessage = <any>error);



        //this.store$.dispatch(new actions.LoginAction(this.credentials));
    }

    createAccount(): void {
        this.router.navigate(['/account/new']);
    }
}
