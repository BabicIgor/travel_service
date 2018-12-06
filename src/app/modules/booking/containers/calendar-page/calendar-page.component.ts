declare var require: any
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';

@Component({
    selector: 'calendar-page',
    templateUrl: './calendar-page.component.html'
})
export class CalendarPageComponent {
    private todayMonth: string = null;
    private todayDate: number = null;
    public calendarEventList: Array<models.Event> = [];

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public onSelected(data: any) : void {
        let date = new Date(data);
        this.router.navigate(['./' + date.getTime()], {relativeTo: this.route});
    };

    ngOnInit(): void {
    	let today = new Date();
    	const MONTHS  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    	this.todayDate = today.getDate();
    	this.todayMonth = MONTHS[today.getMonth()];
    	this.calendarEventList = this.route.snapshot.data['calendarEventList'];
    }

}
