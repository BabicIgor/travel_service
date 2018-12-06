declare var require: any
import { Component } from '@angular/core';

import * as models from '../../domain/models';

import * as models1 from '../../../user/models';

import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as reducers from '../../reducers';
import * as actions from '../../actions/booking-new';

import * as reducers1 from '../../../user/reducers';
import { CreatePackageService } from '../../services/booking/create-package-service';

import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'summary-page',
    templateUrl: './summary-page.component.html'
})
export class SummaryPageComponent {

    errorMessage: String;

    package: models.Package;

    group: models1.Group;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private store$: Store<any>,
        private createPackageService: CreatePackageService
    ) {

        this.store$.select(reducers.getBookingNewPackage).subscribe((_package: models.Package) => {
            this.package = _.cloneDeep(_package);
            console.log(this.package);

        });


        this.store$.select(reducers1.getAccountNewGroup).subscribe((_group: models1.Group) => {
            this.group = _.cloneDeep(_group);

            console.log(this.group);
        });

    }

    ngOnInit(): void {

    }

    back(): void {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    confirm(): void {


        this.package.name = localStorage.getItem('group_id');


        this.createPackageService.createPackage(this.package)
            .subscribe(response => {
                if (response.res == true) {
                    this.router.navigate(['../payment'], { relativeTo: this.route });
                }
                else if (response.res == false) {
                }
                else {
                }
            },
                error => this.errorMessage = <any>error);


    }
}
