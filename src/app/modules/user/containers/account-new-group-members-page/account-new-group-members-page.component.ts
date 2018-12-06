declare var require: any

import {Component, QueryList, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import * as actions from '../../actions/account-new';
import * as components from '../../components';
import * as models from '../../models';
import * as reducers from '../../reducers';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import * as _ from 'lodash';
declare var jQuery: JQueryStatic;

@Component({
  selector: 'account-new-group-members-page',
  templateUrl: './account-new-group-members-page.component.html',
})
export class AccountNewGroupMembersPageComponent {
  members: Array<models.GroupMember>;
  membersSubscription$: Subscription;

  @ViewChildren(components.GroupMemberFormComponent)
  memberFormComponents: QueryList<components.GroupMemberFormComponent>;

  constructor(private store$: Store<any>,
              private router: Router,
              private route: ActivatedRoute) {
    this.membersSubscription$ = this.store$
      .select(reducers.getAccountNewGroupMembers)
      .subscribe((members: Array<models.GroupMember>) => this.members = _.cloneDeep(members));
     jQuery('#header #header-bar').removeClass('hide');
  }

  back(): void {
    this.router.navigate(['../info'], {relativeTo: this.route});
  }

  next(): void {
    let isValid = true;

    for (const memberForm of this.memberFormComponents.toArray()) {
        const memberFormIsValid = memberForm.validate();
        isValid = isValid && memberFormIsValid;
    }

    if (isValid === false) {
      return;
    }

    this.store$.dispatch(new actions.SetGroupMembersAction(this.members));
    
    this.router.navigate(['../../../booking/accommodations'], {relativeTo: this.route});
  }

  skip(): void {
    this.router.navigate(['../../../booking/accommodations'], {relativeTo: this.route});
  }
}
