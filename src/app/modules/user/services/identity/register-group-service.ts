import { Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';


import * as contracts from './contracts';
import * as commonServices from '../../../../common/services';

import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Group } from '../../models';




@Injectable()

export class RegisterGroupService {
    url = "https://musicincline.com/user/regGroup";

    constructor(private http: Http) { }
    regGroupkWithObservable(group : Group): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, group, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

}
