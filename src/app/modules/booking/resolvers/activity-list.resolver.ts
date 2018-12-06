import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class ActivityListResolver implements Resolve<Array<models.Activity>> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(): Observable<Array<models.Activity>> {
        return this.bookingService.getActivityList(new contracts.GetActivityListRequest())
            .map((response: contracts.GetActivityListResponse) => response.entities)
            .take(1);
    }
}
