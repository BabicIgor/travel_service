declare var require: any
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import * as models from '../../models';

@Component({
  selector: 'account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Input() account: models.Account;

  form: FormGroup;
  validationMessages: any;

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirmation: new FormControl(null, [Validators.required, this.validateAreEqual.bind(this)]),
         departureCity: new FormControl(null, [Validators.required])
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
      password: {
        required: 'password is required',
        areEqual: 'Password confirmation doesn\'t match'
      },
      passwordConfirmation: {
        required: 'Password confirmation is required',
        areEqual: 'Password confirmation doesn\'t match'
      },
      departureCity: {
        required: 'departureCity is required'
      }
    };
  }

  passwordChange(): void {
    this.form.controls['passwordConfirmation'].updateValueAndValidity();
  }

  setIsGroupLeader(isGroupLeader: boolean): void {
    this.account.isGroupLeader = isGroupLeader;
  }

  validate(): boolean {
    markAsTouched(this.form);

    return this.form.valid;
  }

  private validateAreEqual(fieldControl: FormControl) {
    if (!this.form) {
      return null;
    }

    return fieldControl.value === this.form.get('password').value ? null : {areEqual: true};
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
