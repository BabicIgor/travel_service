declare var require: any
import {Component} from '@angular/core';

import * as actions from '../../actions/booking-new';
import * as models from '../../domain/models';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { GetHousingService } from '../../services/booking/get-housing-service';

@Component({
    selector: 'accommodation-page',
    templateUrl: './accommodation-page.component.html'
})
export class AccommodationPageComponent {
    public accommodation: models.Accommodation;
    accommodationList: Array<models.Package> = [];
    errorMessage: String;


    accommodationId : any;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private store$: Store<any>,
                private getHousingService: GetHousingService

    ) {
    }

    ngOnInit(): void {
       // this.accommodation = this.route.snapshot.data['accommodation'];

        this.accommodationId = this.route.snapshot.params.accommodationId;

        this.getHousingService.getHousing()
        .subscribe(response => {

          this.accommodationList = response;

          for(var idx = 0; idx < this.accommodationList.length;idx++)
          {
            if(this.accommodationList[idx].id == this.accommodationId)
            {
              this.accommodation = this.accommodationList[idx];
            }
          }


        },
          error => this.errorMessage = <any>error);



    }

    addToCart(): void {
        this.store$.dispatch(new actions.SetAccommodationAction(this.accommodation));
        this.router.navigate(['activities'], {relativeTo: this.route});
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    next(): void {
        this.router.navigate(['../../transportation'], {relativeTo: this.route});
    }
}
