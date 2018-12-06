import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

  {path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  {path: 'account', loadChildren: './modules/user/user.module#UserModule'},
  {path: 'booking', loadChildren: './modules/booking/booking.module#BookingModule'},
  {path: '**', redirectTo: '/booking/destinations'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
