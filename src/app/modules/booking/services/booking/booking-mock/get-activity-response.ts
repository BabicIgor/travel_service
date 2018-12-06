import {GetActivityResponse} from '../../../domain/repositories/booking';

export const response: GetActivityResponse = {
    entity: {
        id: 1,
        name: 'Activity 1',
        text: 'some text',
        image: {
            uri: '/assets/img/mock/destinations/pexels-photo-69894.jpg'
        },
        money : 0
    }
};
