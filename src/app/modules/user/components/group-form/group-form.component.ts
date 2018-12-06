declare var require: any
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import * as models from '../../models';

@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ["./group-form.component.scss"]
})
export class GroupFormComponent implements OnInit {
  @Input() group: models.Group;
  @Input() packages: Array<models.Package>;

  form: FormGroup;
  validationMessages: any;
  public onStartDateUpdated (updateDate: Date) : void{
      this.group.travelStartDate = updateDate;
  };

  public onEndDateUpdated (updateDate: Date) : void{
      this.group.travelEndDate = updateDate;
  };
  ngOnInit(): void {
    this.group.travelStartDate = new Date();

    this.form = new FormGroup({
      groupSize: new FormControl(null, [Validators.required]),
      travelStartDate: new FormControl(null, [Validators.required]),
      travelEndDate: new FormControl(null, [Validators.required])
    });

    this.validationMessages = {
      groupSize: {
        required: 'Group Size is required'
      },
      travelStartDate: {
        required: 'Travel Start Date is required'
      },
      travelEndDate: {
        required: 'Travel End Date is required'
      }
    };
  }



/*  onPackageChanged(packageIdStr: string) {
    const packageId = Number(packageIdStr);

    if (!packageId) {
      this.group.package = null;
    } else {
      const p = this.packages.filter((i: models.Package) => i.id === packageId)[0];

      this.group.package = p;
    }

    // this.updateOrderItem();
  }*/

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
