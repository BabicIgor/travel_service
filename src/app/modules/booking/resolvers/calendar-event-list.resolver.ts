import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class CalendarEventListResolver implements Resolve<Array<models.Event>> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(): Observable<Array<models.Event>> {
        return this.bookingService.getCalendarEventList(new contracts.GetCalendarEventListRequest())
            .map((response: contracts.GetCalendarEventListResponse) => response.entities)
            .take(1);
    }
}
