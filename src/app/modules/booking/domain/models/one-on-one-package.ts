import {Package} from './package';
import {PackageTypeEnum} from './package-type-enum';

export class OneOnOnePackage extends Package {
    name: string = null;
    email: string = null;
    phone: string = null;
    time: string = null;
    emailPreferred = true;

    getPackageType(): PackageTypeEnum {
        return PackageTypeEnum.OneOnOne;
    }
}