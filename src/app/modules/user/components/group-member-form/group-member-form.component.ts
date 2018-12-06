declare var require: any

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import * as models from '../../models';

import * as _ from 'lodash';

@Component({
  selector: 'group-member-form',
  templateUrl: './group-member-form.component.html',
    styles: ['.disabled {pointer-events: none;} '],
})
export class GroupMemberFormComponent implements OnInit {
  @Input() groupMember: models.GroupMember;
  @Input() showFields: boolean; 
  // member: models.GroupMember;

  form: FormGroup;
  validationMessages: any;

  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes.groupMember) {
  //     this.member = _.cloneDeep(changes.groupMember);
  //   }
  // }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    //    password: new FormControl(null, [Validators.required]),
    //    passwordConfirmation: new FormControl(null, [Validators.required, this.validateAreEqual.bind(this)]),
      departureCity: new FormControl(null, [Validators.required])
    });
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
      /*password: {
        required: 'password is required',
        areEqual: 'Password confirmation doesn\'t match'
      },
      passwordConfirmation: {
        required: 'Password confirmation is required',
        areEqual: 'Password confirmation doesn\'t match'
      },*/
      departureCity: {
        required: 'departureCity is required'
      }
    };
  }
    onDateUpdated (date: Date) {
    }

  validate(): boolean {
    markAsTouched(this.form);

    return this.form.valid;
  }
  
 /* passwordChange(): void {
    this.form.controls['passwordConfirmation'].updateValueAndValidity();
  }
  
    private validateAreEqual(fieldControl: FormControl) {
    if (!this.form) {
      return null;
    }

    return fieldControl.value === this.form.get('password').value ? null : {areEqual: true};
  }*/
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
