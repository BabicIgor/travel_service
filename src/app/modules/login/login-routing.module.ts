import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import * as containers from './containers';

const routes: Routes = [
  {
    path: '', component: containers.LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
