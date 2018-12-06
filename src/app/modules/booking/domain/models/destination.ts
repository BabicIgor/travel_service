import {Image} from './image';

export class Destination {
  id: number = null;
  name: string = null;
  header1: string = null;
  header2: string = null;
  header3: string = null;
  text: string = null;
  money : any = null;

  images: Array<Image> = [];
}
