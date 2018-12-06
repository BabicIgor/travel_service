import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import * as contracts from '../domain/repositories/booking';
import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class CalendarEventResolver implements Resolve<models.Event> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<models.Event> {
        const eventDate = route.params['eventDate'];

        if (!eventDate) {
            throw new Error('assert eventDate');
        }

        const request = new contracts.GetCalendarEventRequest();
        request.eventDate = eventDate;

        return this.bookingService.getCalendarEvent(request)
            .map((response: contracts.GetCalendarEventResponse) => response.entity)
            .take(1);
    }
}
