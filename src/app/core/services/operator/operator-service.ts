import {Injectable} from '@angular/core';

import {IOperatorService} from './contracts/i-operator-service';

import * as commonServices from '../../../common/services';
import * as dataContracts from './contracts/data-contracts';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class OperatorService implements IOperatorService {
  private operatorServiceEndpoint: string;

  constructor(private http: commonServices.BaseHttp, private configService: commonServices.ConfigService) {
    this.operatorServiceEndpoint = this.configService.get('OperatorServiceEndpoint');
  }

  public acceptUserAgreement(request: dataContracts.AcceptUserAgreementRequest): Observable<dataContracts.AcceptUserAgreementResponse> {
    const requestUrl = request.agreementAcceptUrl;

    return this.http.put(requestUrl, null)
      .map((svcResp) => {
        const svcJsonResp = svcResp.json();

        const response = new dataContracts.AcceptUserAgreementResponse();

        if (svcJsonResp.status === 202) {
          response.isAccepted = true;
        }

        return response;
      });
  }

  public getUserAgreement(request: dataContracts.GetUserAgreementRequest): Observable<dataContracts.GetUserAgreementResponse> {
    const requestUrl = `${this.operatorServiceEndpoint}/v1.0/operator/access/evaluate`;

    return this.http.get(requestUrl)
      .map((svcResp) => {
        const svcJsonResp = svcResp.json();

        const response = new dataContracts.GetUserAgreementResponse();
        response.isAuthorized = svcJsonResp.data.isAccessGranted;

        if (svcJsonResp.data.isAccessGranted) {
          response.isAuthorized = true;
        } else {
          response.isAuthorized = false;

          response.remainingDocumentUrlToAccept = this.operatorServiceEndpoint + svcJsonResp.data.remainingDocumentUrlToAccept;
          response.remainingDocumentUrlToDownload = this.operatorServiceEndpoint + svcJsonResp.data.remainingDocumentUrlToDownload;
          response.userAccessDeniedReasonId = svcJsonResp.data.user_access_denied_reason_id;
          response.userAccessDeniedReasonMessage = svcJsonResp.data.user_access_denied_reason_message;
        }

        return response;
      });
  }
}
