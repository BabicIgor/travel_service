declare var require: any
import {
    Component, Input, Output, HostListener, AfterViewInit, OnDestroy,
    SimpleChanges, OnChanges, HostBinding, forwardRef, ViewEncapsulation, EventEmitter, OnInit
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractControl} from '@angular/forms';


@Component({
    selector: 'calendar',
    templateUrl: './ng2-calendar.html',
    styleUrls: ['./ng2-calendar.css'],
    encapsulation: ViewEncapsulation.None,
})

export class NKCalendar implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges {
    @Input('calendarOptions') options: any = {};
    @Input('data') data: any;
    @Output() public eventSelected:EventEmitter<any>  = new EventEmitter<any>();

    idCalendar: string = uniqueId('f-calendar1');
    calendar: any;

    ngAfterViewInit() {
        this.init();
    }

    ngOnDestroy() {
       this.calendar.fullCalendar('destroy');
    }

    ngOnChanges(changes: SimpleChanges) {

    }

    writeValue(value: any) {
    }

    registerOnChange(fn: (_: any) => void) {
    }

    registerOnTouched(fn: () => void) {
    }

    checkEmptyValue(e: any) {
    }

    clearModels() {
    }
    
    public getData(start: Date): void {
     
         this.eventSelected.emit(new Date(start));
       
    }
    //////////////////////////////////

    private init(): void {
          var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            var h = {
                        right: '',
                        center: '',
                        left: ''
            };
            
            var it = this;
           this.calendar = ( <any>$('#' + this.idCalendar)).fullCalendar({ //re-initialize the calendar
                header: h,
                defaultView: 'month', // change default view with available options from http://arshaw.com/fullcalendar/docs/views/Available_Views/ 
                slotMinutes: 15,
                editable: true,
                droppable: false, // this allows things to be dropped onto the calendar !!!               
                events: this.data,
                selectable: true,
                selectHelper: true,
                select: function(start, end) {
                    console.log('selected calendar');
                    it.getData(start);
                
                   it.calendar.fullCalendar('unselect');
                },
            });
    }

}

let id = 0;
function uniqueId(prefix: string): string {
    return prefix + ++id;
}

function isDate(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
