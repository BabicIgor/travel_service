import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NKCalendar } from './ng2-calendar';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [NKCalendar],
    declarations: [NKCalendar]
})
export class NKCalendarModule {
}
