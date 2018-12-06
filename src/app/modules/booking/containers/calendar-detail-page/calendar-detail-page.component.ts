declare var require: any
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';

@Component({
    selector: 'calendar-detail-page',
    templateUrl: './calendar-detail-page.component.html'
})
export class CalendarDetailPageComponent {
    private selMonth: string = null;
    private selDate: number = null;
    private calendarEvent: models.Event;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.calendarEvent = this.route.snapshot.data['calendarEvent'];
    	let today = new Date(this.calendarEvent.start);
    	const MONTHS  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    	this.selDate = today.getDate();
    	this.selMonth = MONTHS[today.getMonth() - 1];
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}
