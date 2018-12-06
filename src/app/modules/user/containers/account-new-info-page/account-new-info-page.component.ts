declare var require: any

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as actions from '../../actions/account-new';
import * as components from '../../components';
import * as models from '../../models';
import * as reducers from '../../reducers';
declare var jQuery: JQueryStatic;

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';
import { RegisterGroupService } from '../../services/identity/register-group-service';

@Component({
  selector: 'account-new-info-page',
  templateUrl: './account-new-info-page.component.html'
})
export class AccountNewInfoPageComponent implements OnDestroy {

  groupLeader: models.GroupMember;
  group: models.Group;
  account: models.Account;
  errorMessage: String;

  packageItems$: Observable<Array<models.Package>>;

  @ViewChild(components.GroupFormComponent)
  private groupFormComponent: components.GroupFormComponent;
  @ViewChild(components.AccountFormComponent)
  private groupLeaderFormComponent: components.AccountFormComponent;
  private groupLeaderSubscription: Subscription;
  private groupSubscription: Subscription;

  constructor(private store$: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private registerGroup: RegisterGroupService) {
    this.account = new models.Account();
    this.account.isGroupLeader = true;

    this.groupLeaderSubscription = this.store$
      .select(reducers.getAccountNewGroupLeader)
      .subscribe((groupLeader: models.GroupMember) => {
        this.groupLeader = groupLeader ? _.cloneDeep(groupLeader) : new models.GroupMember();

        jQuery('#header #header-bar').removeClass('hide');
      });

    this.groupSubscription = this.store$
      .select(reducers.getAccountNewGroup)
      .subscribe((group: models.Group) => {
        this.group = _.cloneDeep(group);
        console.log(this.group);
      });

    this.packageItems$ = this.store$.select(reducers.getPackageCollectionItems);


    this.store$.select(reducers.getAccountNewAccount).subscribe((account: models.Account) => {
      this.account = _.cloneDeep(account);
    });
  }

  back(): void {
    this.router.navigate(['../../../booking/destinations'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.groupSubscription.unsubscribe();
    this.groupLeaderSubscription.unsubscribe();
  }

  next(): void {
    const groupLeaderIsValid = this.groupFormComponent.validate();
    const groupIsValid = this.groupLeaderFormComponent.validate();
    if (this.group.groupSize < 4) {
      return;
    }

    // if (groupLeaderIsValid === false || groupIsValid === false) {
    //   return;
    // }

    this.group.leader = this.groupLeader;

    this.store$.dispatch(new actions.SetGroupAction(this.group));
    // this.store$.dispatch(new actions.SetGroupLeaderAction(this.groupLeader));

    this.router.navigate(['../group-members'], { relativeTo: this.route });
  }

  select(): void {
    const groupLeaderIsValid = this.groupFormComponent.validate();
    const groupIsValid = this.groupLeaderFormComponent.validate();
    if (this.group.groupSize < 4) {
      return;
    }

    // if (groupLeaderIsValid === false || groupIsValid === false) {
    //   return;
    // }

    //  this.group.leader = this.groupLeader;

    this.store$.dispatch(new actions.SetGroupAction(this.group));
    // this.store$.dispatch(new actions.SetGroupLeaderAction(this.groupLeader));

    this.router.navigate(['../../../booking/packages'], { relativeTo: this.route });
  }

  create(): void {
    const groupLeaderIsValid = this.groupFormComponent.validate();
    const groupIsValid = this.groupLeaderFormComponent.validate();


    if (this.group.groupSize < 4) {
      alert('Try again with group size');
      return;
    }


    this.group.group_leader = parseInt(localStorage.getItem('user_id'));

    this.registerGroup.regGroupkWithObservable(this.group)
      .subscribe(response => {

        if (response.res == true) {
            localStorage.setItem('group_id', response.insert_group_id);
        }
        else if (response.res == false) {

        }
        else {

        }
      },
        error => this.errorMessage = <any>error);


    // if (groupLeaderIsValid === false || groupIsValid === false) {
    //   return;
    // }

    //  this.group.leader = this.groupLeader;

    this.store$.dispatch(new actions.SetGroupAction(this.group));
    this.store$.dispatch(new actions.SetGroupLeaderAction(this.groupLeader));

    //this.router.navigate(['../../../booking/accommodations'], {relativeTo: this.route});
    this.router.navigate(['../../../booking/destinations'], { relativeTo: this.route });
  }
}
