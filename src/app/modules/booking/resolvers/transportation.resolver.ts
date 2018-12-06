import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import * as contracts from '../domain/repositories/booking';
import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class TransportationResolver implements Resolve<models.Transportation> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<models.Transportation> {
        const transportationId = Number(route.params['transportationId']);

        if (!transportationId) {
            throw new Error('assert transportationId');
        }

        const request = new contracts.GetTransportationRequest();
        request.transportationId = transportationId;

        return this.bookingService.getTransportation(request)
            .map((response: contracts.GetTransportationResponse) => response.entity)
            .take(1);
    }
}
