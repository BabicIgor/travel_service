import {Injectable} from '@angular/core';
import {IUserService} from './contracts';
import * as dataContracts from './contracts/data-contracts';
import * as commonServices from '../../../common/services';
import * as models from '../../models';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService implements IUserService {
  constructor(private http: commonServices.BaseHttp) {
  }

  public getUser(request: dataContracts.GetUserRequest): Observable<dataContracts.GetUserResponse> {
    const user = new models.User();
    user.firstName = 'Test';
    user.lastName = 'User';

    const organization = new models.Organization();
    organization.id = 1;
    user.organization = organization;

    const response = new dataContracts.GetUserResponse();
    response.entity = user;

    return of(response);
  }

  public signOut(request: dataContracts.SignOutRequest): Observable<dataContracts.SignOutResponse> {
    const requestUrl = '/sp/ssout';

    return this.http.get(requestUrl)
      .map((svcResp) => {
        const response = new dataContracts.SignOutResponse();

        return response;
      });
  }
}
