import {NgModule} from '@angular/core';
import {CommonModule as NgCommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EffectsModule} from '@ngrx/effects';

import {NKDatetimeModule} from '../../common/components/ng2-datetime/ng2-datetime.module';
import {Daterangepicker} from 'ng2-daterangepicker';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import {TextMaskModule} from 'angular2-text-mask';

import {UserRoutingModule} from './user-routing.module';

import * as commonComponents from '../../common/components';
import * as commonDirectives from '../../common/directives';
import * as commonServices from '../../common/services';

import {CommonModule} from '../../common/common.module';

import * as coreServices from '../../core/services';

import * as moduleComponents from './components';
import * as moduleContainers from './containers';
// import * as moduleGuards from './guards';
// import * as moduleEffects from './effects';
// import * as moduleResolvers from './resolvers';
import * as moduleServices from './services';

import 'ion-rangeslider/js/ion.rangeSlider.min';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import '../../../../modules/bootstrap-timepicker/bootstrap-timepicker';
import { RegisterGroupService } from './services/identity/register-group-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCommonModule,
    NKDatetimeModule,
    Daterangepicker,
    HttpModule,
    IonRangeSliderModule,
    ReactiveFormsModule,
    TextMaskModule,
    UserRoutingModule,
    // EffectsModule.run(moduleEffects.MembershipOrderNewEffects),
  ],
  exports: [],
  declarations: [
    // commonComponents.PageSummaryComponent,
    // commonComponents.PaginationComponent,
    // commonDirectives.ValidationTooltipDirective,
    moduleComponents.AccountFormComponent,
    moduleComponents.GroupFormComponent,
    moduleComponents.GroupMemberFormComponent,
    moduleContainers.AccountNewInfoPageComponent,
    moduleContainers.AccountNewDetailsPageComponent,
    moduleContainers.AccountNewGroupMembersPageComponent,
    moduleContainers.AccountNewPageComponent,
  ],
  providers: [
    DatePipe,
    moduleServices.RegisterService,
    RegisterGroupService,
    // commonServices.ClientService
    // moduleResolvers.OneWayActiveQuoteCollectionResolver,
    // moduleResolvers.OneWayContractCollectionResolver,
    // moduleResolvers.OneWayQuoteResolver,
    // moduleGuards.OneWayQuoteNewIsAcceptedGuard,
    // moduleGuards.OneWayQuoteNewQuoteListExistsGuard,
    // moduleGuards.OneWayQuoteNewSelectedQuoteExistsGuard,
    // moduleGuards.OneWayQuoteQuoteIsAcceptedGuard,
    // moduleGuards.SharedCharterOrderNewOrderIsSetGuard,
    // moduleGuards.SharedCharterOrderNewIsSubmittedGuard,
    moduleServices.IdentityService
    // moduleServices.MarketplaceService
  ]
})
export class UserModule {
}
