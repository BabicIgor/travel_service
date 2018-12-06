import {Image} from './image';
import {PackageTypeEnum} from './package-type-enum';

export class Package {
    id: number = null;
    name: string = null;
    header1: string = null;
    header2: string = null;
    header3: string = null;
    text: string = null;
    money : number = null;
    images: Array<Image> = [];
}
