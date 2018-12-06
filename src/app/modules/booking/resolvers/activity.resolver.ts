import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import * as contracts from '../domain/repositories/booking';
import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class ActivityResolver implements Resolve<models.Activity> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<models.Activity> {
        const activityId = Number(route.params['activityId']);

        if (!activityId) {
            throw new Error('assert activityId');
        }

        const request = new contracts.GetActivityRequest();
        request.activityId = activityId;

        return this.bookingService.getActivity(request)
            .map((response: contracts.GetActivityResponse) => response.entity)
            .take(1);
    }
}
