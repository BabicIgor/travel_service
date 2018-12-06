import {CookieService} from 'ngx-cookie';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import {IConfigService} from './contracts';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class ConfigService implements IConfigService {
  private config: Object = {};

  constructor(private http: Http, private cookieService: CookieService) {
  }

  public get(key: string): string {
    return this.config[key];
  }

  public load(): Promise<any> {
    this.config['AuthorizationToken'] = this.cookieService.get('token');

    return new Promise((resolve, reject) => {
      return this.http.get('/config')
        .map((configResponse) => {
          const response: any = configResponse.json();
          this.config['ClientServiceEndpoint'] = response.clientServiceEndpoint;
          this.config['ConsoleAppEndpoint'] = response.consoleAppEndpoint;
          this.config['InvoiceServiceEndpoint'] = response.invoiceServiceEndpoint;
          this.config['MarketplaceServiceEndpoint'] = response.marketplaceServiceEndpoint;
          this.config['OperatorServiceEndpoint'] = response.operatorServiceEndpoint;
          this.config['OrderServiceEndpoint'] = response.orderServiceEndpoint;
          this.config['OfferServiceEndpoint'] = response.offerServiceEndpoint;
          this.config['ProductServiceEndpoint'] = response.productServiceEndpoint;

          resolve(true);
        })
        .catch((error: any): any => {
          return 'Server error';
        })
        .toPromise();
    });
  }
}
