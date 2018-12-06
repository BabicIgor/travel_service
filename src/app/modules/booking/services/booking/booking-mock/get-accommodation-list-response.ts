import {GetAccommodationListResponse} from '../../../domain/repositories/booking';

export const response: GetAccommodationListResponse = {
    entities: [{
        id: 1,
        name: 'Hotel 1',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        images: [{
            uri: '/assets/img/mock/destinations/pexels-photo-27066.jpg'
        }],
        money : 0
    }]
};
