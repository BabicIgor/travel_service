import * as contracts from '../../../domain/repositories/booking';

import {response as getAccommodationResponse} from './get-accommodation-response';
import {response as getAccommodationListResponse} from './get-accommodation-list-response';
import {response as getTransportationResponse} from './get-transportation-response';
import {response as getTransportationListResponse} from './get-transportation-list-response';
import {response as getActivityResponse} from './get-activity-response';
import {response as getActivityListResponse} from './get-activity-list-response';
import {response as getDestinationResponse} from './get-destination-response';
import {response as getDestinationListResponse} from './get-destination-list-response';
import {response as getPackageResponse} from './get-package-response';
import {response as getPackageListResponse} from './get-package-list-respopnse';
import {response as getApprovalListResponse} from './get-approval-list-response';
import {response as getCalendarEventResponse} from './get-calendar-event-response';
import {response as getCalendarEventListResponse} from './get-calendar-event-list-response';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class BookingMockService implements contracts.IBookingService {
  getAccommodation(request: contracts.GetAccommodationRequest): Observable<contracts.GetAccommodationResponse> {
    return of(getAccommodationResponse);
  }

  getAccommodationList(request: contracts.GetAccommodationListRequest): Observable<contracts.GetAccommodationListResponse> {
    return of(getAccommodationListResponse);
  }

  getTransportation(request: contracts.GetTransportationRequest): Observable<contracts.GetTransportationResponse> {
    return of(getTransportationResponse);
  }

  getTransportationList(request: contracts.GetTransportationListRequest): Observable<contracts.GetTransportationListResponse> {
    return of(getTransportationListResponse);
  }

  getActivity(request: contracts.GetActivityRequest): Observable<contracts.GetActivityResponse> {
    return of(getActivityResponse);
  }

  getActivityList(request: contracts.GetActivityListRequest): Observable<contracts.GetActivityListResponse> {
      return of(getActivityListResponse);
  }

  getDestination(request: contracts.GetDestinationRequest): Observable<contracts.GetDestinationResponse> {
    return of(getDestinationResponse);
  }

  getDestinationList(request: contracts.GetDestinationListRequest): Observable<contracts.GetDestinationListResponse> {
    return of(getDestinationListResponse);
  }

  getPackage(request: contracts.GetPackageRequest): Observable<contracts.GetPackageResponse> {
    return of(getPackageResponse);
  }

  getPackageList(request: contracts.GetPackageListRequest): Observable<contracts.GetPackageListResponse> {
    return of(getPackageListResponse);
  }

  getApprovalList(request: contracts.GetApprovalListRequest): Observable<contracts.GetApprovalListResponse> {
      return of(getApprovalListResponse);
  }

  getCalendarEvent(request: contracts.GetCalendarEventRequest): Observable<contracts.GetCalendarEventResponse> {
      return of(getCalendarEventResponse);
  }

  getCalendarEventList(request: contracts.GetCalendarEventListRequest): Observable<contracts.GetCalendarEventListResponse> {
      return of(getCalendarEventListResponse);
  }
}
