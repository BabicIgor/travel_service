import {Package} from './package';
import {PackageTypeEnum} from './package-type-enum';
import {CustomPackageItem} from './custom-package-item';
import {Accommodation} from './accommodation';
import {Transportation} from './transportation';
import {Activity} from './activity';
import {EventActivity} from './event-activity';
import { Destination } from './destination';

export class CustomPackage extends Package {
    items: Array<CustomPackageItem> = [];
    dailyActivities: Array<Activity>= [];
    accommodation: Accommodation;
    destination: Destination;
    transportation: Transportation;
    type: PackageTypeEnum;

    getPackageType(): PackageTypeEnum {
        return PackageTypeEnum.Custom;
    }
}
