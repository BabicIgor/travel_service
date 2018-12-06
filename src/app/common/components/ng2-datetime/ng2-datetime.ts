declare var require: any
import {
    Component, Input, Output, HostListener, AfterViewInit, OnDestroy,
    SimpleChanges, OnChanges, HostBinding, forwardRef, ViewEncapsulation, EventEmitter, OnInit
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import {ITimepickerEvent} from './ITimepickerEvent';

const CUSTOM_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NKDatetime),
    multi: true
};

@Component({
    selector: 'datetime',
    providers: [CUSTOM_ACCESSOR],
    template: `
        <div class="ng2-datetime">
            <div [ngClass]="{ 'input-group': !datepickerOptions.hideIcon, 'date': true }" *ngIf="dateType">
                <input id="{{idDatePicker}}" type="text" class="form-control"
                       [attr.formControlName] = "formControlName"
                       [attr.readonly]="readonly"
                       [attr.required]="required"
                       [attr.placeholder]="datepickerOptions.placeholder || 'Choose date'"
                       [attr.tabindex]="tabindex"
                       (blur)="onTouched()"
                       (keyup)="checkEmptyValue($event)"/>
                <div [hidden]="datepickerOptions.hideIcon || datepickerOptions === false"
                     (click)="showDatepicker()"
                     class="input-group-addon">
                    <span [ngClass]="datepickerOptions.icon || 'glyphicon glyphicon-th'"></span>
                </div>
            </div>
            <div [ngClass]="{ 'input-group': !timepickerOptions.hideIcon, 'bootstrap-timepicker timepicker': true }" *ngIf="!dateType">
                <input id="{{idTimePicker}}" type="text" class="form-control input-small"
                       [attr.formControlName] = "formControlName"
                       [attr.readonly]="readonly"
                       [attr.required]="required"
                       [attr.placeholder]="timepickerOptions.placeholder || 'Set time'"
                       [attr.tabindex]="tabindex"
                       (blur)="onTouched()"
                       (keyup)="checkEmptyValue($event)"                       
                       (click)="showTimepicker()">
                <span [hidden]="timepickerOptions.hideIcon || false" class="input-group-addon">
                    <i [ngClass]="timepickerOptions.icon || 'glyphicon glyphicon-time'"></i>
                </span>
            </div>
            <button *ngIf="hasClearButton" type="button" (click)="clearModels()">Clear</button>
        </div>
    `,
    styleUrls: ['./ng2-datetime.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class NKDatetime implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges {
    @Input('timepicker') timepickerOptions: any = {};
    @Input('datepicker') datepickerOptions: any = {};
    @Input('type') dateType: boolean;   
    @Input('hasClearButton') hasClearButton: boolean;
    @Input('travelDate') travelDate: Date;
    @Input() readonly: boolean;
    @Input() required: boolean;
    @Input() tabindex: string;
    @Input() formControlName: string;
    @Output() public dateUpdated:EventEmitter<Date>  = new EventEmitter<Date>();
    @Output() public timeUpdated:EventEmitter<string>  = new EventEmitter<string>();
    date: Date; // ngModel
    dateModel: string;
    timeModel: string;

    // instances
    datepicker: any;
    timepicker: any;

    idDatePicker: string = uniqueId('q-datepicker_');
    idTimePicker: string = uniqueId('q-timepicker_');

    onChange = (_: any) => {
    }

    @HostListener('blur')
    onTouched = () => {

    }

    @HostBinding('attr.tabindex')
    get tabindexAttr(): string | undefined {
        return this.tabindex === undefined ? '-1' : undefined;
    }

    ngAfterViewInit() {        
        if (this.travelDate) {
            this.date = this.travelDate;
        } else {
            this.date = new Date();
        }        
        
        this.init();
    }

    ngOnDestroy() {
        if (this.datepicker) {
            this.datepicker.datepicker('destroy');
        }
        if (this.timepicker) {
            this.timepicker.timepicker('remove');
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (changes['datepickerOptions'] && this.datepicker) {
                this.datepicker.datepicker('destroy');

                if (changes['datepickerOptions'].currentValue) {
                    this.datepicker = null;
                    this.init();
                } else if (changes['datepickerOptions'].currentValue === false) {
                    this.datepicker.remove();
                }
            }
            if (changes['timepickerOptions'] && this.timepicker) {
                this.timepicker.timepicker('remove');

                if (changes['timepickerOptions'].currentValue) {
                    this.timepicker = null;
                    this.init();
                } else if (changes['timepickerOptions'].currentValue === false) {
                    this.timepicker.parent().remove();
                }
            }
        }
    }

    writeValue(value: any) {
        this.date = value;
        if (isDate(this.date)) {
            //setTimeout(() => {
                this.updateModel(this.date);
            //}, 0);
        } else {
            this.clearModels();
        }
    }

    registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    checkEmptyValue(e: any) {
        const value = e.target.value;
        if (value === '' && (
                this.timepickerOptions === false ||
                this.datepickerOptions === false ||
                (this.timeModel === '' && this.dateModel === '')
            )) {
            this.onChange(undefined);
        }
    }

    clearModels() {
        this.onChange(undefined);
        this.updateModel(null);
    }

    showTimepicker() {
        this.timepicker.timepicker('showWidget');
    }

    showDatepicker() {
        this.datepicker.datepicker('show');
    }

    //////////////////////////////////

    private init(): void {
        if (!this.datepicker && this.datepickerOptions !== false && this.dateType) {
            var it = this;
            let options = jQuery.extend({enableOnReadonly: !this.readonly}, this.datepickerOptions);
            this.datepicker = (<any>$('#' + this.idDatePicker)).datepicker(options);
            this.datepicker
                .on('changeDate', (e: any) => {
                    let newDate: Date = e.date;

                    if (isDate(it.date) && isDate(newDate)) {
                        // get hours/minutes
                        newDate.setHours(it.date.getHours());
                        newDate.setMinutes(it.date.getMinutes());
                        newDate.setSeconds(it.date.getSeconds());
                    }

                    it.date = newDate;

                    if (!isDate(newDate)) {
                        it.date = new Date();                        
                    }
                    
                    it.onChange(it.date);
                    it.updateDatepicker(it.date);
                });

            this.updateDatepicker(this.date);

        } else if (this.datepickerOptions === false) {
            (<any>$('#' + this.idDatePicker)).remove();
        }

        if (!this.timepicker && this.timepickerOptions !== false && !this.dateType) {
            let options = jQuery.extend({defaultTime: false}, this.timepickerOptions);
            this.timepicker = (<any>$('#' + this.idTimePicker)).timepicker(options);
            this.timepicker
                .on('changeTime.timepicker', (e: ITimepickerEvent) => {
                                     

                }).on('hide.timepicker', (e: ITimepickerEvent) => {
                    let {meridian, hours} = e.time;

                    if (meridian) {
                        // has meridian -> convert 12 to 24h
                        if (meridian === 'PM' && hours < 12) {
                            hours = hours + 12;
                        }
                        if (meridian === 'AM' && hours === 12) {
                            hours = hours - 12;
                        }
                        hours = parseInt(this.pad(hours), 10);
                    }

                    if (!isDate(this.date)) {
                        this.date = new Date();                        
                    }

                    this.date.setHours(hours);
                    this.date.setMinutes(e.time.minutes);
                    this.date.setSeconds(e.time.seconds);
                    this.onChange(this.date);
                    this.updateTimepicker(this.date);   
                });

            this.updateTimepicker(this.date);

        } else if (this.timepickerOptions === false) {
            (<any>$('#' + this.idTimePicker)).parent().remove();
        }

    }

    private updateModel(date: Date): void {
        // update datepicker
        this.updateDatepicker(date);
        

        // update timepicker
        this.updateTimepicker(date);            
    }

    private updateDatepicker(date: any) {
        if (this.datepicker !== undefined && this.dateType) {
            if (date != null) {
                this.datepicker.datepicker('update', date);
                this.dateModel = date;
            } else {
                this.datepicker.datepicker('update', null);
                this.dateModel = '';
            }
            this.dateUpdated.emit(date);
        }
    }

    private updateTimepicker(date: any) {        
        if (this.timepicker !== undefined && !this.dateType) {
            if (date != null) {
                let hours = date.getHours();
                if (this.timepickerOptions.showMeridian) {
                    // Convert 24 to 12 hour system
                    hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
                }
                const meridian = date.getHours() >= 12 ? ' PM' : ' AM';
                const time =
                    this.pad(hours) + ':' +
                    this.pad(this.date.getMinutes()) +
                    // ':' + this.pad(this.date.getSeconds()) +
                    (this.timepickerOptions.showMeridian || this.timepickerOptions.showMeridian === undefined
                        ? meridian : '');

                this.timepicker.timepicker('setTime', time);
                this.timeModel = time;
            } else {
                this.timepicker.timepicker('setTime', null);
                this.timeModel = '';                
            }
            this.timeUpdated.emit(this.timeModel);
        }
    }

    private pad(value: any): string {
        return value.toString().length < 2 ? '0' + value : value.toString();
    }
}

let id = 0;
function uniqueId(prefix: string): string {
    return prefix + ++id;
}

function isDate(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
