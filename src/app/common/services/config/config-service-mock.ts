import {CookieService} from 'ngx-cookie';
import {environment} from '../../../../environments/environment';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {IConfigService} from './contracts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService implements IConfigService {
  private config: Object = {};

  constructor(private http: Http, private cookieService: CookieService) {
  }

  public get(key: string): string {
    return this.config[key];
  }

  public load(): Promise<any> {
    this.config['AuthorizationToken'] = environment.bearerToken;
    this.config['ClientServiceEndpoint'] = environment.clientServiceEndpoint;
    this.config['ConsoleAppEndpoint'] = environment.consoleAppEndpoint;
    this.config['InvoiceServiceEndpoint'] = environment.invoiceServiceEndpoint;
    this.config['MarketplaceServiceEndpoint'] = environment.marketplaceServiceEndpoint;
    this.config['OperatorServiceEndpoint'] = environment.operatorServiceEndpoint;
    this.config['OrderServiceEndpoint'] = environment.orderServiceEndpoint;
    this.config['OfferServiceEndpoint'] = environment.offerServiceEndpoint;
    this.config['ProductServiceEndpoint'] = environment.productServiceEndpoint;

    console.log('config-mock-service')

    return Promise.resolve();
  }
}
