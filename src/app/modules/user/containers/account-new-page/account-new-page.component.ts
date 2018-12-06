declare var require: any

import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Store} from '@ngrx/store';

import * as models from '../../models';

@Component({
  selector: 'account-new-page',
  templateUrl: './account-new-page.component.html',
    styleUrls: ['./account-new-page.component.scss'],
})
export class AccountNewPageComponent {
  constructor(private store$: Store<any>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  public login(): void {
  }
}
