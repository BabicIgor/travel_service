import * as contracts from './contracts';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw';

export class IdentityMockService implements contracts.IIdentityService {
    authorize(request: contracts.AuthorizeRequest): Observable<contracts.AuthorizeResponse> {
        if (request.user === 'bido' && request.password === 'bido') {
            const response = new contracts.AuthorizeResponse();
            response.accessToken = '2YotnFZFEjr1zCsicMWpAA';
            response.tokenType = 'Bearer';
            response.expiresIn = 3600;

            return of(response);
        }

        return _throw(new Error('Incorrect Credentials'));
    }
}
