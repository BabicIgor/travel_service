import {InjectionToken, NgModule, OpaqueToken} from '@angular/core';
import {CommonModule as NgCommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EffectsModule} from '@ngrx/effects';

import {NKDatetimeModule} from '../../common/components/ng2-datetime/ng2-datetime.module';
import {NKCalendarModule} from '../../common/components/ng2-calendar/ng2-calendar.module';

import {Daterangepicker} from 'ng2-daterangepicker';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import {TextMaskModule} from 'angular2-text-mask';

import {BookingRoutingModule} from './booking-routing.module';

import * as commonComponents from '../../common/components';
import * as commonDirectives from '../../common/directives';
import * as commonServices from '../../common/services';

import {CommonModule} from '../../common/common.module';

import * as coreServices from '../../core/services';

import * as moduleComponents from './components';
import * as moduleContainers from './containers';
import * as moduleGuards from './guards';
import * as moduleEffects from './effects';
import * as moduleResolvers from './resolvers';
import * as moduleServices from './services';

import 'ion-rangeslider/js/ion.rangeSlider.min';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import '../../../../modules/bootstrap-timepicker/bootstrap-timepicker';
import '../../../../modules/fullcalendar/fullcalendar';

import {BOOKING_SERVICE_TOKEN, IBookingService} from './domain/repositories/booking';

import {} from '../../../environments/environment';
import {environment} from '../../../environments/environment.local';
import {EnvironmentEnum} from '../../../environments/environment.interface';

import {CarouselModule} from 'ngx-bootstrap/carousel';
import { CreatePackageService } from './services/booking/create-package-service';
import { CheckPaymentService } from './services/booking/check-payment-service';
import { GetDestinationService } from './services/booking/get-destination-service';
import { GetHousingService } from './services/booking/get-housing-service';
import { GetTransportationService } from './services/booking/get-transportation-service';
import { GetActivityService } from './services/booking/get-activity-service';

@NgModule({
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        FormsModule,
        NgCommonModule,
        NKDatetimeModule,
        NKCalendarModule,
        Daterangepicker,
        HttpModule,
        IonRangeSliderModule,
        ReactiveFormsModule,
        TextMaskModule,
        BookingRoutingModule
        // EffectsModule.run(moduleEffects.MembershipOrderNewEffects),
    ],
    exports: [],
    declarations: [
        // commonComponents.PageSummaryComponent,
        // commonComponents.PaginationComponent,
        // commonDirectives.ValidationTooltipDirective,
        moduleComponents.OneOnOneCreationFormComponent,
        moduleContainers.AccommodationListPageComponent,
        moduleContainers.AccommodationPageComponent,
        moduleContainers.TransportationListPageComponent,
        moduleContainers.TransportationPageComponent,
        moduleContainers.SummaryPageComponent,
        moduleContainers.PaymentPageComponent,
        moduleContainers.ActivityListPageComponent,
        moduleContainers.ActivityPageComponent,
        moduleContainers.CustomPackageApprovalPageComponent,
        moduleContainers.DestinationListPageComponent,
        moduleContainers.DestinationPageComponent,
        moduleContainers.OneOnOneCreationPageComponent,
        moduleContainers.OrderSuccessPageComponent,
        moduleContainers.PackagePageComponent,
        moduleContainers.PackageListPageComponent,
        moduleContainers.PackageTypeListPageComponent,
        moduleContainers.CalendarPageComponent,
        moduleContainers.CalendarDetailPageComponent
    ],
    providers: [
        DatePipe,
        {
            provide: BOOKING_SERVICE_TOKEN,
            useValue: environment.environment === EnvironmentEnum.LOCAL ? new moduleServices.BookingMockService() : new moduleServices.BookingService()
        },
        moduleResolvers.AccommodationResolver,
        moduleResolvers.AccommodationListResolver,
        moduleResolvers.TransportationResolver,
        moduleResolvers.TransportationListResolver,
        moduleResolvers.ActivityResolver,
        moduleResolvers.ActivityListResolver,
        moduleResolvers.DestinationResolver,
        moduleResolvers.DestinationListResolver,
        moduleResolvers.PackageResolver,
        moduleResolvers.PackageListResolver,
        moduleResolvers.ApprovalListResolver,
        moduleResolvers.CalendarEventResolver,
        moduleResolvers.CalendarEventListResolver,
        CreatePackageService,
        CheckPaymentService,
        GetDestinationService,
        GetHousingService,
        GetTransportationService,
        GetActivityService,
        // moduleGuards.OneWayQuoteNewIsAcceptedGuard,
        // moduleGuards.OneWayQuoteNewQuoteListExistsGuard,
        // moduleGuards.OneWayQuoteNewSelectedQuoteExistsGuard,
        // moduleGuards.OneWayQuoteQuoteIsAcceptedGuard,
        // moduleGuards.SharedCharterOrderNewOrderIsSetGuard,
        // moduleGuards.SharedCharterOrderNewIsSubmittedGuard,
        // moduleServices.IdentityService
        // moduleServices.MarketplaceService
    ]
})
export class BookingModule {
}
