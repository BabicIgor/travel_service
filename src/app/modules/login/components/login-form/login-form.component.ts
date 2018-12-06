declare var require: any
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

import * as models from '../../models';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    @Input() credentials: models.Credentials;
    @Output() onLogin = new EventEmitter<void>();

    form: FormGroup;
    validationMessages: any;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            user: [undefined, Validators.required],
            password: [undefined, Validators.required]
        });

        this.validationMessages = {
            user: {
                required: 'User ID is required',
                incorrect: ''
            },
            password: {
                required: 'Password is required',
                incorrect: ''
            }
        };
    }

    validate(): boolean {
        this.setUserValidity(true);
        this.setPasswordValidity(true);

        this.markAsTouched(this.form);

        return this.form.valid;
    }

    setInvalid(): void {
        this.setUserValidity(false);
        this.setPasswordValidity(false);
    }

    private setUserValidity(isValid: boolean): void {
        let errors: ValidationErrors = this.form.controls['user'].errors;

        if (isValid === false) {
            if (errors === null) {
                errors = {incorrect: true};
            }
        }

        this.form.controls['user'].setErrors(errors);
    }

    private setPasswordValidity(isValid: boolean): void {
        let errors: ValidationErrors = this.form.controls['password'].errors;

        if (isValid === false) {
            if (errors === null) {
                errors = {incorrect: true};
            }
        }

        this.form.controls['password'].setErrors(errors);
    }

    private markAsTouched(form: FormGroup): void {
        Object.keys(form.controls).forEach(k => {
            if ((form.controls[k]) instanceof FormControl) {
                form.controls[k].markAsTouched();
            } else if ((form.controls[k]) instanceof FormGroup) {
                this.markAsTouched(form.controls[k] as FormGroup);
            }
        });
    }
}
