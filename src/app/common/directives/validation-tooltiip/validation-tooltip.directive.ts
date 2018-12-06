import {Directive, DoCheck, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
declare var jQuery: JQueryStatic;

@Directive({
  selector: '[validationTooltip]'
})
export class ValidationTooltipDirective implements OnInit, DoCheck {
  @Input('validationTooltip') formControl: AbstractControl;
  @Input() validationMessages: { [id: string]: string };

  // private popover: any;
  private formGroupEl: any;
  private currentError: string;

  constructor(private el: ElementRef) {
    this.currentError = null;
  }

  ngOnInit(): void {
    this.formGroupEl = jQuery(this.el.nativeElement).closest('.form-group');

    // this.popover = jQuery(this.el.nativeElement).popover({
    //   trigger: 'manual',
    //   placement: 'top',
    //   html: true,
    //   container: jQuery(this.el.nativeElement).closest('form')
    // });
  }

  ngDoCheck(): void {
    this.checkError();
  }

  private needShow(): boolean {
    return !this.formControl.valid && this.formControl.touched;
  }

  private needClose(): boolean {
    return this.formControl.valid || !this.formControl.touched;
  }

  private showError(error: string): void {
    const errorMessage = this.validationMessages[error];
    // this.popover.data('bs.popover').options.content = errorMessage;

    this.formGroupEl.addClass('has-error');
    // this.popover.popover('show');
  }

  private hideError(): void {
    this.formGroupEl.removeClass('has-error');
    // this.popover.popover('hide');
  }

  private checkError(): void {
    if (this.needShow()) {
      if (!this.formControl.errors) {
        return;
      }

      const error = Object.keys(this.formControl.errors)[0];

      if (error !== this.currentError) {
        this.showError(error);
        this.currentError = error;
      }
    }

    if (this.needClose() && this.currentError) {
      this.hideError();

      this.currentError = null;
    }
  }
}
