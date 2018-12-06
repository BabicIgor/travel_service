import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class ApprovalListResolver implements Resolve<Array<models.GroupApproval>> {
    constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
    }

    resolve(): Observable<Array<models.GroupApproval>> {
        return this.bookingService.getApprovalList(new contracts.GetApprovalListRequest())
            .map((response: contracts.GetApprovalListResponse) => response.entities)
            .take(1);
    }
}
