import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class PackageListResolver implements Resolve<Array<models.Package>> {
  constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
  }

  resolve(): Observable<Array<models.Package>> {
    return this.bookingService.getPackageList(new contracts.GetPackageListRequest())
      .map((response: contracts.GetPackageListResponse) => response.entities)
      .take(1);
  }
}
