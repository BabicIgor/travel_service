import {GetAccommodationListResponse, GetActivityListResponse} from '../../../domain/repositories/booking';

export const response: GetActivityListResponse = {
    entities: [{
        id: 1,
        name: 'Hiking',
        text: 'some text',
        money : 0,
        image: {
            uri: '/assets/img/mock/destinations/pexels-photo-196464.jpg'
        }
        
    }]
};
