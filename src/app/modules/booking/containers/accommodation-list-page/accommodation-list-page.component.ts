declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';
import { Store } from '@ngrx/store';
import * as reducers from '../../reducers';
import * as actions from '../../actions/booking-new';
import { GetHousingService } from '../../services/booking/get-housing-service';

@Component({
    selector: 'accommodation-list-page',
    templateUrl: './accommodation-list-page.component.html'
})
export class AccommodationListPageComponent {
    accommodationList: Array<models.Package> = [];
    errorMessage: String;

    constructor(private store$: Store<any>, private route: ActivatedRoute, private router: Router,
        private getHousingService: GetHousingService
) {


        
    }

    ngOnInit(): void {
        //this.accommodationList = this.route.snapshot.data['accommodationList'];
        console.log(this.accommodationList);

        this.getHousingService.getHousing()
        .subscribe(response => {

          this.accommodationList = response;


        },
          error => this.errorMessage = <any>error);


    }

    onSelect(p: models.Accommodation): void {

        this.store$.dispatch(new actions.SetAccommodationAction(p));
        localStorage.setItem('accommodationMoney', p.money);

        this.router.navigate([p.id.toString()], {relativeTo: this.route});
    }

    back(): void {
        this.router.navigate(['../../account/new/info'], {relativeTo: this.route});
    }
}
