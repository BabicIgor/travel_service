import {Transportation} from './transportation';
import {CustomPackageItem} from './custom-package-item';
import {CustomPackageItemTypeEnum} from './custom-package-item-type-enum';

export class TransportationCustomPackageItem extends CustomPackageItem {
    transportation: Transportation = null;

    getType(): CustomPackageItemTypeEnum {
        return CustomPackageItemTypeEnum.Transportation;
    }
}