import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class TransportationListResolver implements Resolve<Array<models.Transportation>> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(): Observable<Array<models.Transportation>> {
        return this.bookingService.getTransportationList(new contracts.GetTransportationListRequest())
            .map((response: contracts.GetTransportationListResponse) => response.entities)
            .take(1);
    }
}
