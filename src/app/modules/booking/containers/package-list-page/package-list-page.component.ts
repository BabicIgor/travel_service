declare var require: any
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as models from '../../domain/models';

@Component({
  selector: 'package-list-page',
  templateUrl: './package-list-page.component.html'
})
export class PackageListPageComponent implements OnInit {
  packageList: Array<models.Package> = [];
  checkTravel: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.packageList = this.route.snapshot.data['packageList'];
  }

  onSelect(pkg: models.Package): void {

    // this.router.navigate(['../../account/new/group-members'], {relativeTo: this.route});
    this.router.navigate(['../housing_options'], {relativeTo: this.route});
  }

  back(): void {
    this.router.navigate(['../../account/new/info'], {relativeTo: this.route});
  }
}
