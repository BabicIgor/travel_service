import {GetPackageListResponse} from '../../../domain/repositories/booking';

export const response: GetPackageListResponse = {
  entities: [{
    id: 1,
    name: 'Package 1',
    header1: 'header 1',
    header2: 'header 2',
    header3: 'header 3',
    text: 'Some Text',
    images: [{
      uri: '/assets/img/mock/destinations/pexels-photo-24957.jpg'
    }, {
      uri: '/assets/img/mock/destinations/pexels-photo-91474.jpg'
    }, {
      uri: '/assets/img/mock/destinations/pexels-photo-60228-1.jpg'
    }],
    money : 0
  }]
};
