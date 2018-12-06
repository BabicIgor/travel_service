import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class AccommodationListResolver implements Resolve<Array<models.Accommodation>> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(): Observable<Array<models.Accommodation>> {
        return this.bookingService.getAccommodationList(new contracts.GetAccommodationListRequest())
            .map((response: contracts.GetAccommodationListResponse) => response.entities)
            .take(1);
    }
}
