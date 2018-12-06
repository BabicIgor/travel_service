import {Injectable} from '@angular/core';
import {Headers, Http, ConnectionBackend, Response, Request, RequestOptions, RequestOptionsArgs} from '@angular/http';
// import {AppConfig} from '../../configuration/app.config';

import * as commonServices from '../../services';

import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class BaseHttp extends Http {

  constructor(private backend: ConnectionBackend,
              private defaultOptions: RequestOptions,
              private configService: commonServices.ConfigService) {
    super(backend, defaultOptions);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs) {
    return this.intercept(super.patch(url, body, this.getRequestOptionArgs(options)));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, options));
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }

    if (options.headers == null) {
      options.headers = new Headers();
    }

    options.headers.append('Authorization', 'Bearer ' + this.configService.get('AuthorizationToken'));

    return options;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if (err.status === 401) {
        location.reload();
        return empty();
      } else {
        return _throw(err);
      }
    });
  }
}
