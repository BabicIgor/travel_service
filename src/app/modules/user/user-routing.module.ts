import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import * as containers from './containers';
// import * as guards from './guards';
// import * as resolvers from './resolvers';

const routes: Routes = [
  {
    path: 'new', component: containers.AccountNewPageComponent,
    children: [
      {path: '', component: containers.AccountNewDetailsPageComponent},
      {
        path: 'info',
        component: containers.AccountNewInfoPageComponent,
      },
      {
        path: 'group-members',
        component: containers.AccountNewGroupMembersPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
