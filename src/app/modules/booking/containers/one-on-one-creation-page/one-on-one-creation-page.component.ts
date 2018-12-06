declare var require: any
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as actions from '../../actions/booking-new';
import * as components from '../../components';
import * as models from '../../domain/models';
import * as reducers from '../../reducers';

import {Store} from '@ngrx/store';

import {Subscription} from 'rxjs/Subscription';

import * as _ from 'lodash';

@Component({
    selector: 'one-on-one-creation-page',
    templateUrl: './one-on-one-creation-page.component.html'
})
export class OneOnOneCreationPageComponent {

    oneOnOneCreation: models.OneOnOnePackage;

    @ViewChild(components.OneOnOneCreationFormComponent)
    private oneOnOneCreationFormComponent: components.OneOnOneCreationFormComponent;

    private oneOnOneCreationSubscription: Subscription;

    constructor(private store$: Store<any>,
                private router: Router,
                private route: ActivatedRoute) {
        this.oneOnOneCreationSubscription = this.store$
            .select(reducers.getBookingNewPackage)
            .subscribe((oneOnOneCreation: models.OneOnOnePackage) => {
                this.oneOnOneCreation = _.cloneDeep(oneOnOneCreation);
            });
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    submit(): void {
        const formIsValid = this.oneOnOneCreationFormComponent.validate();

        if (formIsValid === false) {
            return;
        }

        this.store$.dispatch(new actions.SetOneOnOnePackageAction(this.oneOnOneCreation));
        this.store$.dispatch(new actions.SubmitOrderAction());

        this.router.navigate(['../../../../approval'], {relativeTo: this.route});
    }
}
