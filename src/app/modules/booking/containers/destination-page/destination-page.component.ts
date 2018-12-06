declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as models from '../../domain/models';
import * as actions from '../../actions/booking-new';
import * as reducers from '../../reducers';
import { Store } from '@ngrx/store';
import { GetDestinationService } from '../../services/booking/get-destination-service';

@Component({
  selector: 'destination-page',
  templateUrl: './destination-page.component.html'
})
export class DestinationPageComponent implements OnInit {
  private destination: models.Destination;
  errorMessage: String;
  destinationId : any;
  private destinationList: Array<models.Destination> = [];

  constructor(private store$: Store<any>, private route: ActivatedRoute, private router: Router,
    private getDestService: GetDestinationService
  ) {
  }

  ngOnInit(): void {
    //this.destination = this.route.snapshot.data['destination'];
    
    this.destinationId = this.route.snapshot.params.destinationId;
    


    this.getDestService.getDestination()
        .subscribe(response => {

          this.destinationList = response;


          for(var idx = 0; idx < this.destinationList.length;idx++)
          {
            if(this.destinationList[idx].id == this.destinationId)
            {
              this.destination = this.destinationList[idx];
            }
          }

        },
          error => this.errorMessage = <any>error);




  }

  next(): void {
    //    this.router.navigate(['../../../account/new/info'], {relativeTo: this.route});
    // this.router.navigate(['../../packages'], {relativeTo: this.route});


    
    
    this.router.navigate(['../../housing_options'], { relativeTo: this.route });

  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
