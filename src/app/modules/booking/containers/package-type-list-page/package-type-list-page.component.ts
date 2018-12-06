declare var require: any
import {Component} from '@angular/core';
import * as models from '../../domain/models';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as actions from '../../actions/booking-new';

@Component({
    selector: 'package-type-list-page',
    templateUrl: './package-type-list-page.component.html'
})
export class PackageTypeListPageComponent {
    packageTypeList: Array<models.PackageType>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private store$: Store<any>) {
        this.packageTypeList = [{
            id: 'most-popular',
            type: models.PackageTypeEnum.MostPopular,
            uri: 'most-popular',
            name: 'Most Popular Packages',
            images: [{
                uri: '/assets/img/mock/destinations/pexels-photo-24957.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-91474.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-60228-1.jpg'
            }]
        }, {
            id: 'one-on-one',
            type: models.PackageTypeEnum.OneOnOne,
            uri: 'one-on-one',
            name: '1 on 1 package creation',
            images: [{
                uri: '/assets/img/mock/destinations/pexels-photo-24957.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-91474.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-60228-1.jpg'
            }]
        }, {
            id: 'create-your-own',
            type: models.PackageTypeEnum.Custom,
            uri: '../accommodations',
            name: 'Create Your Own',
            images: [{
                uri: '/assets/img/mock/destinations/pexels-photo-24957.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-91474.jpg'
            }, {
                uri: '/assets/img/mock/destinations/pexels-photo-60228-1.jpg'
            }]
        }];
    }

    back(): void {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onSelect(packageType: models.PackageType): void {
        this.store$.dispatch(new actions.SetPackageTypeAction(packageType.type));

        this.router.navigate([packageType.uri.toString()], {relativeTo: this.route});
    }
}
