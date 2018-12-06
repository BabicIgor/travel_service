import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class DestinationListResolver implements Resolve<Array<models.Destination>> {
  constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
  }

  resolve(): Observable<Array<models.Destination>> {
    return this.bookingService.getDestinationList(new contracts.GetDestinationListRequest())
      .map((response: contracts.GetDestinationListResponse) => response.entities)
      .take(1);
  }
}
