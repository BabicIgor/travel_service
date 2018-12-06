import * as contracts from './contracts';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class IdentityService implements contracts.IIdentityService {
  authorize(request: contracts.AuthorizeRequest): Observable<contracts.AuthorizeResponse> {
    const response = new contracts.AuthorizeResponse();
    response.accessToken = '2YotnFZFEjr1zCsicMWpAA';
    response.tokenType = 'Bearer';
    response.expiresIn = 3600;

    return of(response);
  }
}
