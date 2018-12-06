import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import * as contracts from '../domain/repositories/booking';
import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class DestinationResolver implements Resolve<models.Destination> {
  constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<models.Destination> {
    const destinationId = Number(route.params['destinationId']);

    if (!destinationId) {
      throw new Error('assert destinationId');
    }

    const request = new contracts.GetDestinationRequest();
    request.destinationId = destinationId;

    return this.bookingService.getDestination(request)
      .map((response: contracts.GetDestinationResponse) => response.entity)
      .take(1);
  }
}
