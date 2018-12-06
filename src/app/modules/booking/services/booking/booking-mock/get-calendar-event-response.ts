import {GetCalendarEventResponse} from '../../../domain/repositories/booking';

export const response: GetCalendarEventResponse = {
    entity: {
        start: new Date(2018, 6, 7),
        eventActivities: [{
            eventDate: new Date(2018, 6, 7),
            eventTime: '1:00 pm',
            activity: {
                id: 1,
                name: 'Hiking',
                text: 'some text',
                image: {
                    uri: '/assets/img/mock/destinations/pexels-photo-196464.jpg'
                },
                money : 0
            }
        }]
    }
};
