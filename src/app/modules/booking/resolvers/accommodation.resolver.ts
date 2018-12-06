import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import * as contracts from '../domain/repositories/booking';
import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AccommodationResolver implements Resolve<models.Accommodation> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<models.Accommodation> {
        const accommodationId = Number(route.params['accommodationId']);

        if (!accommodationId) {
            throw new Error('assert accommodationId');
        }

        const request = new contracts.GetAccommodationRequest();
        request.accommodationId = accommodationId;

        return this.bookingService.getAccommodation(request)
            .map((response: contracts.GetAccommodationResponse) => response.entity)
            .take(1);
    }
}
