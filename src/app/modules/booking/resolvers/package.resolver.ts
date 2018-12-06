import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import * as models from '../domain/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as contracts from '../domain/repositories/booking';

@Injectable()
export class PackageResolver implements Resolve<models.Package> {
  constructor(@Inject(contracts.BOOKING_SERVICE_TOKEN) private bookingService: contracts.IBookingService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<models.Package> {
    const packageId = Number(route.params['packageId']);

    if (!packageId) {
      throw new Error('assert packageId');
    }

    const request = new contracts.GetPackageRequest();
    request.packageId = packageId;

    return this.bookingService.getPackage(new contracts.GetPackageRequest())
      .map((response: contracts.GetPackageResponse) => response.entity)
      .take(1);
  }
}
