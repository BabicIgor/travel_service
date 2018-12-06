declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';
import {Store} from '@ngrx/store';
import * as actions from '../../actions/booking-new';
import { GetActivityService } from '../../services/booking/get-activity-service';

@Component({
  selector: 'activity-list-page',
  templateUrl: './activity-list-page.component.html'
})
export class ActivityListPageComponent {
    private activityList: Array<models.Activity> = [];
    private timeType: string = null;
    private isDayTime: boolean = false;
    errorMessage: String;

    constructor(private store$: Store<any>, private route: ActivatedRoute, private router: Router,
        private getActivityService: GetActivityService

    ) {
    }

    ngOnInit(): void {
        //this.activityList = this.route.snapshot.data['activityList'];
        console.log(this.activityList);


        this.getActivityService.getActivity()
        .subscribe(response => {

          this.activityList = response;


        },
          error => this.errorMessage = <any>error);






        this.timeType = this.route.snapshot.url[this.route.snapshot.url.length - 1].path == 'daytime' ? 'Daytime' : 'Nighttime';
        this.isDayTime = (this.timeType == 'Daytime');
    }

    onSelect(activity: models.Activity): void {


        this.store$.dispatch(new actions.AddDailyActivity(activity));
        localStorage.setItem('activityMoney', activity.money);
        this.router.navigate([activity.id.toString()], {relativeTo: this.route});
    }

    back(): void {
        if (this.isDayTime)
            this.router.navigate(['../../accommodations'], {relativeTo: this.route});
        else
            this.router.navigate(['../daytime'], {relativeTo: this.route});
    }

    next(): void {
        this.router.navigate(['../nighttime'], {relativeTo: this.route});
    }
}
