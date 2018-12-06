declare var require: any
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import * as models from '../../domain/models';

@Component({
  selector: 'one-on-one-creation-form',
  templateUrl: './one-on-one-creation-form.component.html'
})
export class OneOnOneCreationFormComponent {
  @Input() oneOnOneCreation: models.OneOnOnePackage;

  form: FormGroup;
  validationMessages: any;

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        time: new FormControl(null, [Validators.required])
      }
    );

    this.validationMessages = {
      name: {
        required: 'Name is required'
      },
      phone: {
        required: 'phone is required'
      },
      email: {
        required: 'email is required'
      },
      time: {
        required: 'time is required'
      }
    };
  }

  onEventTimeUpdated(updateTime: string) : void {
    this.oneOnOneCreation.time = updateTime;
  }

  setEmailPreferred(value: boolean): void {
    this.oneOnOneCreation.emailPreferred = value;
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
