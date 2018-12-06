import {Observable} from 'rxjs/Observable';
import {InjectionToken} from '@angular/core';

export interface IIdentityService {
    authorize(request: AuthorizeRequest): Observable<AuthorizeResponse>;
}

export const IDENTITY_SERVICE_TOKEN = new InjectionToken('Login.IdentityService');

export class AuthorizeRequest {
    public user: string;
    public password: string;
    constructor(){
        
    }
}

export class AuthorizeResponse {
    public accessToken: string;
    public tokenType: string;
    public expiresIn: number;
}
