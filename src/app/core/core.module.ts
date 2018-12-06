import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import * as moduleComponents from './components';
import * as moduleEffects from './effects';
import * as moduleGuards from './guards';
import * as moduleResolvers from './resolvers';
import * as moduleServices from './services';

// Application wide components, services
// In case if component should be reused in other applications, better put it into common module
@NgModule({
  declarations: [
    moduleComponents.AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EffectsModule.run(moduleEffects.UserEffects)
  ],
  providers: [
    moduleGuards.UserIsAuthenticatedGuard,
    moduleResolvers.UserAgreementResolver,
    moduleServices.OperatorService,
    moduleServices.UserService
  ],
})
export class CoreModule {
}
