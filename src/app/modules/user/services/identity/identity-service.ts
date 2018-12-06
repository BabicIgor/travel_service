import {Inject} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import * as contracts from './contracts';
import * as commonServices from '../../../../common/services';

import {Observable} from 'rxjs/Observable';

export class IdentityService implements contracts.IIdentityService {
  private API_PATH: string;

  constructor(@Inject(Http) private http: Http,
              @Inject(commonServices.ConfigService) private configService: commonServices.ConfigService) {
    this.API_PATH = this.configService.get('IdentityServiceEndpoint');
  }

  authorize(request: contracts.AuthorizeRequest): Observable<contracts.AuthorizeResponse> {
    const requestUrl = `${this.API_PATH}/token`;

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(`${request.user}:${request.password}`));

    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(requestUrl, requestOptions)
      .map((svcResp) => {
        const item = svcResp.json().data;

        const response = new contracts.AuthorizeResponse();
        response.accessToken = item.access_token;
        response.tokenType = item.token_type;
        response.expiresIn = Number(item.expires_in);

        return response;
      });
  }
}
