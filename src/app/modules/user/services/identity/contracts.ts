import {Observable} from 'rxjs/Observable';

export interface IIdentityService {
  authorize(request: AuthorizeRequest): Observable<AuthorizeResponse>;
}

export class AuthorizeRequest {
  public user: string;
  public password: string;
}

export class AuthorizeResponse {
  public accessToken: string;
  public tokenType: string;
  public expiresIn: number;
}

export class Account {
  public name: string;
  public phone: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public isGroupLeader: boolean;
  public departureCity: string;
  constructor(){

  }

}

