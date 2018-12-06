import * as dataContracts from './data-contracts';
import {Observable} from 'rxjs/Observable';

export interface IUserService {
  getUser(request: dataContracts.GetUserRequest): Observable<dataContracts.GetUserResponse>;
  signOut(request: dataContracts.SignOutRequest): Observable<dataContracts.SignOutResponse>;
}
