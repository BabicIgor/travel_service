declare var require: any
import {Component} from '@angular/core';

// import * as actions from '../../actions/booking-new';
// import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';

@Component({
    selector: 'custom-package-approval-page',
    templateUrl: './custom-package-approval-page.component.html'
})
export class CustomPackageApprovalPageComponent {
    private approvalList: Array<models.GroupApproval> = [];

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.approvalList = this.route.snapshot.data['approvalList'];
    }

    checkCalendar(): void {
        this.router.navigate(['../calendar'], {relativeTo: this.route});
    }
}
