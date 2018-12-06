import {CustomPackageItemTypeEnum} from './custom-package-item-type-enum';
import {CustomPackageItemPlacement} from './custom-package-item-placement';

export class CustomPackageItem {
    placement: CustomPackageItemPlacement = null;

    getType(): CustomPackageItemTypeEnum {
        throw new Error('Not Implemented');
    }
}