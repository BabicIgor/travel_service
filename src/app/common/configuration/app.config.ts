import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class AppConfig {
  private config: Object = {};

  constructor(private http: Http, private cookieService: CookieService) {
  }

  public get(key: string) {
    return this.config[key];
  }

  public load() {
    const bearerToken = this.cookieService.get('token');
    // this.config['AuthorizationToken'] = bearerToken;
    this.config['AuthorizationToken'] = 'DEV_TOKEN';

    return new Promise((resolve, reject) => {

      resolve(true);

      // this.http.get('/config').map(res => this.config = res.json()).catch((error: any): any => {
      //   // this.config['OperatorServiceEndpoint'] = 'http://localhost:5000';
      //   resolve(true);
      //   return Observable.throw(error.json().error || 'Server error');
      // }).subscribe((configResponse) => {
      //   this.config = configResponse;
      //
      //   resolve(true);
      // });
    });
  }
}
