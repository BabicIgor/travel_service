declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


import { Store } from '@ngrx/store';

import * as models from '../../domain/models';
import * as actions from '../../actions/booking-new';
import { GetTransportationService } from '../../services/booking/get-transportation-service';

@Component({
    selector: 'transportation-list-page',
    templateUrl: './transportation-list-page.component.html'
})
export class TransportationListPageComponent {
    transportationList: Array<models.Package> = [];
    errorMessage: String;

    constructor(private store$: Store<any>, private route: ActivatedRoute, private router: Router,
        private getTransService: GetTransportationService
) {
    }

    ngOnInit(): void {
       // this.transportationList = this.route.snapshot.data['transportationList'];


        console.log(this.transportationList);
        this.getTransService.getTrans()
        .subscribe(response => {

          this.transportationList = response;


        },
          error => this.errorMessage = <any>error);


    }

    onSelect(p: models.Transportation): void {
        this.store$.dispatch(new actions.SetTransportationAction(p));
        localStorage.setItem('transMoney', p.money);

        this.router.navigate([p.id.toString()], {relativeTo: this.route});
    }

    back(): void {
        this.router.navigate(['../housing_options'], {relativeTo: this.route});
    }
}
