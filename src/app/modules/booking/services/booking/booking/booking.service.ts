import * as contracts from '../../../domain/repositories/booking';

import {Observable} from 'rxjs/Observable';

export class BookingService implements contracts.IBookingService {
    getAccommodation(request: contracts.GetAccommodationRequest): Observable<contracts.GetAccommodationResponse> {
        throw new Error('Not Implemented');
    }

    getAccommodationList(request: contracts.GetAccommodationListRequest): Observable<contracts.GetAccommodationListResponse> {
        throw new Error('Not Implemented');
    }

    getTransportation(request: contracts.GetTransportationRequest): Observable<contracts.GetTransportationResponse> {
        throw new Error('Not Implemented');
    }

    getTransportationList(request: contracts.GetTransportationListRequest): Observable<contracts.GetTransportationListResponse> {
        throw new Error('Not Implemented');
    }

    getActivity(request: contracts.GetActivityRequest): Observable<contracts.GetActivityResponse> {
        throw new Error('Not Implemented');
    }

    getActivityList(request: contracts.GetActivityListRequest): Observable<contracts.GetActivityListResponse> {
        throw new Error('Not Implemented');
    }

    getDestination(request: contracts.GetDestinationRequest): Observable<contracts.GetDestinationResponse> {
        throw new Error('Not Implemented');
    }

    getDestinationList(request: contracts.GetDestinationListRequest): Observable<contracts.GetDestinationListResponse> {
        throw new Error('Not Implemented');
    }

    getPackage(request: contracts.GetPackageRequest): Observable<contracts.GetPackageResponse> {
        throw new Error('Not Implemented');
    }

    getPackageList(request: contracts.GetPackageListRequest): Observable<contracts.GetPackageListResponse> {
        throw new Error('Not Implemented');
    }

    getApprovalList(request: contracts.GetApprovalListRequest): Observable<contracts.GetApprovalListResponse> {
        throw new Error('Not Implemented');
    }

    getCalendarEvent(request: contracts.GetCalendarEventRequest): Observable<contracts.GetCalendarEventResponse> {
        throw new Error('Not Implemented');
    }

    getCalendarEventList(request: contracts.GetCalendarEventListRequest): Observable<contracts.GetCalendarEventListResponse> {
        throw new Error('Not Implemented');
    }
}
