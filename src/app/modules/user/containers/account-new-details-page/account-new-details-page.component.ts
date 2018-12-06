declare var require: any

import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import * as actions from '../../actions/account-new';
import * as models from '../../models';
import * as components from '../../components';
import * as reducers from '../../reducers';
declare var jQuery: JQueryStatic;

import { Subscription } from 'rxjs/Subscription';
import { RegisterService } from '../../services';

@Component({
  selector: 'account-new-details-page',
  templateUrl: './account-new-details-page.component.html'
})
export class AccountNewDetailsPageComponent {

  account: models.Account;
  errorMessage: String;

  @ViewChild(components.AccountFormComponent)
  private accountFormComponent: components.AccountFormComponent;
  private accountSubscription: Subscription;

  constructor(private store$: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private registerService: RegisterService) {
    this.accountSubscription = this.store$
      .select(reducers.getAccountNewAccount)
      .subscribe((account: models.Account) => {
        this.account = _.cloneDeep(account);
      });

    this.account = new models.Account();
    this.account.isGroupLeader = true;
    jQuery('#header #header-bar').removeClass('hide');
  }

  next(): void {
    const isValid = this.accountFormComponent.validate();

    if (!isValid) {
      return;
    }

    console.log(this.account);

    this.registerService.regUserkWithObservable(this.account)
      .subscribe(response => {

        if (response.res == true) {
          localStorage.setItem('user_id', response.insert_id);
        }
        else if (response.res == false) {

        }
        else {

        }
      },
        error => this.errorMessage = <any>error);

    console.log(this.account);




    this.store$.dispatch(new actions.SetAccountAction(this.account));

    const groupLeader = new models.GroupMember();
    if (this.account.isGroupLeader) {
      groupLeader.email = this.account.email;
      groupLeader.name = this.account.name;
      groupLeader.phone = this.account.phone;
    }
    console.log(groupLeader);



    this.store$.dispatch(new actions.SetGroupLeaderAction(groupLeader));
    this.router.navigate(['info'], { relativeTo: this.route.parent });
  }
}
