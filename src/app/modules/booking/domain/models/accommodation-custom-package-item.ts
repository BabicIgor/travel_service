import {Accommodation} from './accommodation';
import {CustomPackageItem} from './custom-package-item';
import {CustomPackageItemTypeEnum} from './custom-package-item-type-enum';

export class AccommodationCustomPackageItem extends CustomPackageItem {
    accommodation: Accommodation = null;

    getType(): CustomPackageItemTypeEnum {
        return CustomPackageItemTypeEnum.Accommodation;
    }
}