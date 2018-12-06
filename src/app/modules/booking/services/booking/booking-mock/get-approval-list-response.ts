import {GetApprovalListResponse} from '../../../domain/repositories/booking';

export const response: GetApprovalListResponse = {
    entities: [{
        activity: {
            id: 1,
            name: 'Hiking',
            text: 'some text',
            image: {
                uri: '/assets/img/mock/destinations/pexels-photo-196464.jpg'
            },
            money : 0
        },
        activityApprove: '1',
        users: [{
            id: 1,
            name: 'Chris',
            approve: true
        }, {
            id: 2,
            name: 'John',
            approve: false
        }, {
            id: 3,
            name: 'Alex',
            approve: true
        }]
    }]
    
};