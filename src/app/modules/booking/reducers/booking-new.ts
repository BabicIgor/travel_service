import * as actions from '../actions/booking-new';
import * as models from '../domain/models';

import * as _ from 'lodash';

export interface State {
    package: models.Package;
}

const initialState: State = {
    package: new models.CustomPackage()
};

export function reducer(state = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.SET_PACKAGE_TYPE:
            let p = null;

            const packageType: models.PackageTypeEnum = action.payload;

            switch (packageType) {
                case models.PackageTypeEnum.Custom:
                    p = new models.CustomPackage();
                    break;
                case models.PackageTypeEnum.OneOnOne:
                    p = new models.OneOnOnePackage();
                    break;
                case models.PackageTypeEnum.MostPopular:
                    p = new models.MostPopularPackage();
                    break;
                default:
                    throw new Error('Not Implemented');
            }

            return {
                ...state,
                package: p
            };

        // case actions.LOGIN: {
        //     return Object.assign({}, state, {
        //         isLoading: true
        //     });
        // }

        case actions.SET_MOST_POPULAR_PACKAGE:
            return {
                package: action.payload
            };

        case actions.SET_ONE_ON_ONE_PACKAGE:
            return {
                package: action.payload
            };

        

        case actions.ADD_DAILY_ACTIVITY:
            const p5: models.CustomPackage = _.cloneDeep(state.package) as models.CustomPackage;

            p5.dailyActivities.push(action.payload);

            return {
                package: p5
            };

        case actions.SET_ACCOMMODATION:
            const p2: models.CustomPackage = _.cloneDeep(state.package) as models.CustomPackage;

            p2.accommodation = action.payload;

            return {
                package: p2
            };
            
        case actions.SET_DESTINATION:
            const p4: models.CustomPackage = _.cloneDeep(state.package) as models.CustomPackage;

            p4.destination = action.payload;
            
            return {
                package: p4
            };
        case actions.SET_TRANSPORTATION:
            const p3: models.CustomPackage = _.cloneDeep(state.package) as models.CustomPackage;

            p3.transportation = action.payload;

            return {
                package: p3
            };

        default: {
            return state;
        }
    }
}

// export const getIsLoading = (state: State) => state.isLoading;
export const getPackage = (state: State) => state.package;
