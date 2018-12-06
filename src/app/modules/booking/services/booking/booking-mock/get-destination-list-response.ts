import {GetDestinationListResponse} from '../../../domain/repositories/booking';

export const response: GetDestinationListResponse = {
  entities: [{
    id: 1,
    name: 'San Francisco',
    header1: 'San Francisco',
    header2: 'Location Blurb',
    header3: 'Lonem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',    
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
