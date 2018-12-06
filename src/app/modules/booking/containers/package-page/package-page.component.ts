declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as actions from '../../actions/booking-new';
import * as models from '../../domain/models';
import {Store} from '@ngrx/store';

@Component({
    selector: 'package-page',
    templateUrl: './package-page.component.html'
})
export class PackagePageComponent {
    package: models.Package;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private store$: Store<any>) {
    }

    ngOnInit(): void {
        this.package = this.route.snapshot.data['package'];
    }

    next(): void {
        this.router.navigate(['../../../account/new/group-members'], {relativeTo: this.route});
    }
    
    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    /*
    submit(): void {
        this.store$.dispatch(new actions.SetMostPopularPackageAction(this.package));
        this.store$.dispatch(new actions.SubmitOrderAction());
        this.router.navigate(['../../../../../approval'], {relativeTo: this.route});
    }
    */
}
