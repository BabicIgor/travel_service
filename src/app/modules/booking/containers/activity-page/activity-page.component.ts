declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import * as actions from '../../actions/booking-new';
import * as models from '../../domain/models';
import {Store} from '@ngrx/store';
import { GetActivityService } from '../../services/booking/get-activity-service';

@Component({
  selector: 'activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent {
    private activity: models.Activity;
    private eventDate: string;
    private eventTime: string;
    private today: Date = new Date();
    private eventActivity: models.EventActivity;
    public isdone: boolean;
    form: FormGroup;
    validationMessages: any;
    errorMessage: String;
    private activityList: Array<models.Activity> = [];
    activityId : any;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private store$: Store<any>,
                private getActivityService: GetActivityService
            ) {
    }

    ngOnInit(): void {
        //this.activity = this.route.snapshot.data['activity'];        

        this.activityId = this.route.snapshot.params.activityId;



        this.getActivityService.getActivity()
        .subscribe(response => {
            this.activityList = response;

          for(var idx = 0; idx < this.activityList.length;idx++)
          {
            if(this.activityList[idx].id == this.activityId)
            {
              this.activity = this.activityList[idx];
            }
          }

        },
          error => this.errorMessage = <any>error);
















        this.isdone = false;
        var date = new Date();
        var mm = date.getMonth() < 9 ? "0" + (date.getMonth()  + 1) : date.getMonth();
        var day = date.getDate() < 10 ? "0" + date.getDate(): date.getDate();

        this.eventDate = mm+ "-" + day + "-" + date.getFullYear();        
        this.eventTime = date.getHours() + ":" + date.getMinutes();

        this.validationMessages = {
        };

        this.form = new FormGroup({
            eventDate: new FormControl(null, [Validators.required]),
            eventTime: new FormControl(null, [Validators.required])
        });        
    }

    /*addToCart(): void {
        this.eventActivity = {
            eventDate: this.eventDate,
            eventTime: this.eventTime,
            activity: this.activity
        };
        this.store$.dispatch(new actions.AddDailyActivity(this.eventActivity));
        this.router.navigate(['../../../../../../approval'], {relativeTo: this.route});
    }*/
    
    goto(): void {
        // todo list
        this.isdone = true;
        this.router.navigate(['../../../../account/new/group-members'], {relativeTo: this.route});
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    next(): void {
        this.router.navigate(['../../../summary'], {relativeTo: this.route});
    }

    validate(): boolean {
        markAsTouched(this.form);
        return this.form.valid;
    }
}

function markAsTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach(k => {
        if ((form.controls[k]) instanceof FormControl) {
            form.controls[k].markAsTouched();
        } else if ((form.controls[k]) instanceof FormGroup) {
            markAsTouched(form.controls[k] as FormGroup);
        }
    });
}