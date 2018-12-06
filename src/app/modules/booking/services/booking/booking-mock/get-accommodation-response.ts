import {GetAccommodationResponse} from '../../../domain/repositories/booking';

export const response: GetAccommodationResponse = {
  entity: {
    id: 1,
    name: 'Hotel 1',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    images: [{
          uri: '/assets/img/mock/destinations/pexels-photo-69894.jpg'
      }, {
          uri: '/assets/img/mock/destinations/pexels-photo-91474.jpg'
      }, {
          uri: '/assets/img/mock/destinations/pexels-photo-63921.jpg'
    }],
    money : 0
  }
};
