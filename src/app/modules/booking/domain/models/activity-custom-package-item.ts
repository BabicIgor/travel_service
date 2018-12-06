import {CustomPackageItemTypeEnum} from './custom-package-item-type-enum';
import {CustomPackageItem} from './custom-package-item';
import {Activity} from './activity';

export class ActivityCustomPackageItem extends CustomPackageItem {
    activity: Activity = null;

    getType(): CustomPackageItemTypeEnum {
        return CustomPackageItemTypeEnum.Activity;
    }
}