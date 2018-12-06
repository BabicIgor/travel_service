declare var require: any

import {BrowserModule} from '@angular/platform-browser';
import {CookieModule} from 'ngx-cookie';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';

// import {AppConfig} from './common/configuration';
import * as commonServices from './common/services';
import * as coreComponents from './core/components';

import {reducer} from './reducers';

import {CommonModule} from './common/common.module';
import {CoreModule} from './core/core.module';

import * as $ from 'jquery';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    CookieModule.forRoot(),
    CoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 15})
  ],
  providers: [
    // AppConfig,
    commonServices.ConfigService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (configService: commonServices.ConfigService) => () => configService.load(),
    //   deps: [commonServices.ConfigService],
    //   multi: true
    // },
    {
      provide: commonServices.BaseHttp,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, configService: commonServices.ConfigService) => new commonServices.BaseHttp(backend, defaultOptions, configService),
      deps: [XHRBackend, RequestOptions, commonServices.ConfigService]
    }
  ],
  bootstrap: [coreComponents.AppComponent]
})
export class AppModule {
}
