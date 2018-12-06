import {Injectable} from '@angular/core';

import {BaseHttp, ConfigService} from '../../../common/services';

import {IClientService} from './contracts';
import * as dataContracts from './contracts/data-contracts';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {_throw} from 'rxjs/observable/throw';
import {empty} from 'rxjs/observable/empty';
import {of} from 'rxjs/observable/of';
import * as models from '../../models';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class ClientService implements IClientService {
  constructor(private http: BaseHttp, private configService: ConfigService, ) {
  }

  private formatDate(date) {
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  public searchClients(request: dataContracts.SearchClientsRequest): Observable<dataContracts.SearchClientsResponse> {
    const requestUrl = this.configService.get('ClientServiceEndpoint') + '/v1.0/clients/';

    const params = new URLSearchParams();
    if (request.name && request.name.length > 0) params.append('legalName', request.name);
    if (request.dob) params.append('dob', this.formatDate(request.dob));
    if (request.email && request.email.length > 0) params.append('email', request.email);
    if (request.phone && request.phone.length > 0) params.append('phone', request.phone);

    if (params.paramsMap.size == 0) {
      // return empty();
      const response = new dataContracts.SearchClientsResponse();
      response.entities = new Array<models.Client>();
      return of(response);
    }

    // params.append('dob', '1975-10-28');
    // params.set('offset', shuttlesQuery.offset.toString());
    // params.set('limit', shuttlesQuery.limit.toString());

    params.append('offset', '0');
    params.append('limit', '10');

    const requestOptions = new RequestOptions({params: params});

    return this.http.get(requestUrl, requestOptions)
      .map((svcResp) => {
        const svcJsonResp = svcResp.json();
        // console.log('svcJsonResp=' + JSON.stringify(svcJsonResp));

        const response = new dataContracts.SearchClientsResponse();
        response.entities = new Array<models.Client>();

        if (!svcJsonResp || !svcJsonResp.data || !svcJsonResp.data.rows) {
          return response;
        }

        svcJsonResp.data.rows.forEach(function (el) {
          const client = new models.Client();
          client.id = el.id;
          client.name = el.legal_name;
          client.dob = el.dob;
          client.email = el.email;
          client.phone = el.phone;
          response.entities.push(client);
        });

        return response;
    });
  }
}
