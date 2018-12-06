import {Injectable} from '@angular/core';

import {IClientService} from './contracts';
import * as dataContracts from './contracts/data-contracts';

import * as models from '../../models';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class ClientService implements IClientService {
  private allClients: Array<models.Client>;

  constructor() {
    this.initClients();
  }

  private initClients(): void {
    this.allClients = new Array<models.Client>();

    let client = new models.Client();
    client.id = 1;
    client.name = 'James McLaughlin';
    client.dob = new Date('05/05/1950');
    client.product = 'Sophisticated';
    client.dateCreated = new Date('01/01/2017');
    client.email = 'James.McLaughlin@yahoo.com';
    client.phone = '303-123-4567';
    client.status = 'Active';
    this.allClients.push(client);

    client = new models.Client();
    client.id = 2;
    client.name = 'Nancy Pelton';
    client.dob = new Date('07/07/1970');
    client.product = 'Smart';
    client.dateCreated = new Date('05/07/2017');
    client.email = 'Nancy.Pelton@gmail.com';
    client.phone = '954-305-4567';
    client.status = 'Active';
    this.allClients.push(client);

    client = new models.Client();
    client.id = 3;
    client.name = 'Amanda Ross';
    client.dob = new Date('08/08/1980');
    client.product = 'Smart';
    client.dateCreated = new Date('05/31/2015');
    client.email = 'Amanda.Ross@hotmail.com';
    client.phone = '561-305-4567';
    client.status = 'Inactive';
    this.allClients.push(client);

    client = new models.Client();
    client.id = 4;
    client.name = 'John Smith';
    client.dob = new Date('09/15/1950');
    client.product = 'Sophisticated';
    client.dateCreated = new Date('06/01/2016');
    client.email = 'John.Smith@aol.com';
    client.phone = '720-305-1234';
    client.status = 'Active';
    this.allClients.push(client);

    client = new models.Client();
    client.id = 5;
    client.name = 'Gilbert Johnson';
    client.dob = new Date('08/19/1961');
    client.product = 'Smart';
    client.dateCreated = new Date('12/15/2015');
    client.email = 'Gilbert.Johnson@yahoo.com';
    client.phone = '305-908-2345';
    client.status = 'Active';
    this.allClients.push(client);
  }

  public searchClients(request: dataContracts.SearchClientsRequest): Observable<dataContracts.SearchClientsResponse> {
    const response = new dataContracts.SearchClientsResponse();

    response.entities = this.allClients.filter(client => {
      return (!request.name || client.name.toLowerCase().indexOf(request.name.toLowerCase()) !== -1);
    });

    response.count = this.allClients.length;

    return of(response);
  }
}
