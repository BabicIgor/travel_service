import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import * as containers from './containers';
import * as resolvers from './resolvers';

const routes: Routes = [
    // {
    //     path: 'accommodations',
    //     component: containers.AccommodationListPageComponent,
    //     resolve: {
    //         accommodationList: resolvers.AccommodationListResolver
    //     }
    // },  
    {
        path: 'destinations',
        component: containers.DestinationListPageComponent,
        resolve: {
            destinationList: resolvers.DestinationListResolver
        }
    },
    {
        path: 'destinations/:destinationId',
        component: containers.DestinationPageComponent,
        resolve: {
            destination: resolvers.DestinationResolver
        }
    },
    {
        path: 'packages', 
        component: containers.PackageListPageComponent,
        resolve: {
            packageList: resolvers.PackageListResolver
        }
    },
    {
        path: 'housing_options', 
        component: containers.AccommodationListPageComponent,
        resolve: {
            accommodationList: resolvers.AccommodationListResolver
        }
    },
    {
        path: 'housing_options/:accommodationId', 
        component: containers.AccommodationPageComponent,
        resolve: {
            accommodation: resolvers.AccommodationResolver
        }
    },
    {
        path: 'transportation', 
        component: containers.TransportationListPageComponent,
        resolve: {
            transportationList: resolvers.TransportationListResolver
        }
    },
    {
        path: 'transportation/:transportationId',
        component: containers.TransportationPageComponent,
        resolve: {
            transportation: resolvers.TransportationResolver
        }
    },
    {
        path: 'activities/daytime',
        component: containers.ActivityListPageComponent,
        resolve: {
            activityList: resolvers.ActivityListResolver
        }
    },
    {
        path: 'activities/nighttime',
        component: containers.ActivityListPageComponent,
        resolve: {
            activityList: resolvers.ActivityListResolver
        }
    },
    {
        path: 'activities/daytime/:activityId',
        component: containers.ActivityPageComponent,
        resolve: {
            activity: resolvers.ActivityResolver
        }
    },
    {
        path: 'activities/nighttime/:activityId',
        component: containers.ActivityPageComponent,
        resolve: {
            activity: resolvers.ActivityResolver
        }
    },
    {
        path: 'summary', 
        component: containers.SummaryPageComponent        
    },
    {
        path: 'payment', 
        component: containers.PaymentPageComponent        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule {
}
