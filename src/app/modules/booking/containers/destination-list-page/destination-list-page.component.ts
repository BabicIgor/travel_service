declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as models from '../../domain/models';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/booking-new';
import { GetDestinationService } from '../../services/booking/get-destination-service';

@Component({
  selector: 'destination-list-page',
  templateUrl: './destination-list-page.component.html'
})
export class DestinationListPageComponent implements OnInit {
  private destinationList: Array<models.Destination> = [];
  errorMessage: String;

  constructor(private store$: Store<any>, private route: ActivatedRoute, private router: Router,
    private getDestService: GetDestinationService
  ) {
  }

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('user_id')) > 0) {
      //this.destinationList = this.route.snapshot.data['destinationList'];




      this.getDestService.getDestination()
        .subscribe(response => {

          this.destinationList = response;


        },
          error => this.errorMessage = <any>error);



    }
    else {
      this.router.navigate(['login']);
    }
  }
  onSelect(destination: models.Destination): void {
    this.store$.dispatch(new actions.SetDestinationAction(destination));
    localStorage.setItem('destinationMoney', destination.money);

    this.router.navigate([destination.id.toString()], { relativeTo: this.route });
  }
}
