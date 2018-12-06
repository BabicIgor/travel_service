import * as models from '../models';
import {Observable} from 'rxjs/Observable';
import {InjectionToken} from '@angular/core';

export interface IBookingService {
    getAccommodation(request: GetAccommodationRequest): Observable<GetAccommodationResponse>;

    getAccommodationList(request: GetAccommodationListRequest): Observable<GetAccommodationListResponse>;

    getTransportation(request: GetTransportationRequest): Observable<GetTransportationResponse>;

    getTransportationList(request: GetTransportationListRequest): Observable<GetTransportationListResponse>;

    getActivity(request: GetActivityRequest): Observable<GetActivityResponse>;

    getActivityList(request: GetActivityListRequest): Observable<GetActivityListResponse>;

    getDestination(request: GetDestinationRequest): Observable<GetDestinationResponse>;

    getDestinationList(request: GetDestinationListRequest): Observable<GetDestinationListResponse>;

    getPackage(request: GetPackageRequest): Observable<GetPackageResponse>;

    getPackageList(request: GetPackageListRequest): Observable<GetPackageListResponse>;

    getApprovalList(request: GetApprovalListRequest): Observable<GetApprovalListResponse>;

    getCalendarEvent(request: GetCalendarEventRequest): Observable<GetCalendarEventResponse>;

    getCalendarEventList(request: GetCalendarEventListRequest): Observable<GetCalendarEventListResponse>;
}

export const BOOKING_SERVICE_TOKEN = new InjectionToken<IBookingService>('IBookingService');

export class GetAccommodationRequest {
    accommodationId: number;
}

export class GetAccommodationResponse {
    entity: models.Accommodation;
}

export class GetAccommodationListRequest {
    destinationId: number;
}

export class GetAccommodationListResponse {
    entities: Array<models.Accommodation>;
}

export class GetTransportationRequest {
    transportationId: number;
}

export class GetTransportationResponse {
    entity: models.Transportation;
}

export class GetTransportationListRequest {
    destinationId: number;
}

export class GetTransportationListResponse {
    entities: Array<models.Transportation>;
}

export class GetActivityRequest {
    activityId: number;
}

export class GetActivityResponse {
    entity: models.Activity;
}

export class GetActivityListRequest {
}

export class GetActivityListResponse {
    entities: Array<models.Activity>;
}

export class GetDestinationRequest {
    destinationId: number;
}

export class GetDestinationResponse {
    entity: models.Destination;
}

export class GetDestinationListRequest {
}

export class GetDestinationListResponse {
    entities: Array<models.Destination>;
}

export class GetPackageRequest {
    packageId: number;
}

export class GetPackageResponse {
    entity: models.Package;
}

export class GetPackageListRequest {
}

export class GetPackageListResponse {
    entities: Array<models.Package>;
}

export class GetApprovalListRequest {
}

export class GetApprovalListResponse {
    entities: Array<models.GroupApproval>;
}

export class GetCalendarEventRequest {
    eventDate: string;
}

export class GetCalendarEventResponse {
    entity: models.Event;
}

export class GetCalendarEventListRequest {
    activityId: number;
}

export class GetCalendarEventListResponse {
    entities: Array<models.Event>;
}