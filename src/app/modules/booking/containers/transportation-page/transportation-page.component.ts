declare var require: any
import {Component} from '@angular/core';

import * as actions from '../../actions/booking-new';
import * as models from '../../domain/models';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { GetTransportationService } from '../../services/booking/get-transportation-service';

@Component({
    selector: 'transportation-page',
    templateUrl: './transportation-page.component.html'
})
export class TransportationPageComponent {
    private transportation: models.Transportation;
    transportationList: Array<models.Package> = [];
    errorMessage: String;
    transportationId : any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private store$: Store<any>,
                private getTransService: GetTransportationService

    ) {
    }

    ngOnInit(): void {
        //this.transportation = this.route.snapshot.data['transportation'];

        this.transportationId = this.route.snapshot.params.transportationId;



        this.getTransService.getTrans()
        .subscribe(response => {

          this.transportationList = response;
        for(var idx = 0; idx < this.transportationList.length;idx++)
          {
            if(this.transportationList[idx].id == this.transportationId)
            {
              this.transportation = this.transportationList[idx];
            }
          }

        },
          error => this.errorMessage = <any>error);


    }

    addToCart(): void {
        this.store$.dispatch(new actions.SetTransportationAction(this.transportation));
        this.router.navigate(['activities'], {relativeTo: this.route});
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    next(): void {


        
        this.router.navigate(['../../activities/daytime'], {relativeTo: this.route});
    }
}
