import {NgModule} from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import * as moduleComponents from './components';
import * as moduleDirectives from './directives';
import * as moduleServices from './services';

@NgModule({
  declarations: [
    moduleComponents.PageSummaryComponent,
    moduleComponents.PaginationComponent,
    moduleDirectives.ValidationTooltipDirective
  ],
  exports: [
    moduleComponents.PageSummaryComponent,
    moduleComponents.PaginationComponent,
    moduleDirectives.ValidationTooltipDirective,
  ],
  imports: [
    NgCommonModule
  ]
})
export class CommonModule {
}

