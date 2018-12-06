import {Image} from './image';
import {PackageTypeEnum} from './package-type-enum';

export class PackageType {
    id: string;
    type: PackageTypeEnum;
    images: Array<Image> = [];
    name: string;
    uri: string;
}
