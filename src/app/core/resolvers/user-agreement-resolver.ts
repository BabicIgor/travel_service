import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import * as models from '../models';
import {OperatorService} from '../services';
import * as dataContracts from '../services/operator/contracts/data-contracts';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserAgreementResolver implements Resolve<models.UserAgreement> {
  constructor(private operatorService: OperatorService) {
  }

  resolve(): Observable<models.UserAgreement> {
    return this.operatorService.getUserAgreement(new dataContracts.GetUserAgreementRequest())
      .map((response: dataContracts.GetUserAgreementResponse) => {
          const userAgreement = new models.UserAgreement();

          userAgreement.documentUri = response.remainingDocumentUrlToDownload;
          userAgreement.actionUri = response.remainingDocumentUrlToAccept;

          return userAgreement;
        }
      );
  }
}
