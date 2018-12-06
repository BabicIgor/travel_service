import * as dataContracts from './data-contracts';
import {Observable} from 'rxjs/Observable';

export interface IOperatorService {
  acceptUserAgreement(request: dataContracts.AcceptUserAgreementRequest): Observable<dataContracts.AcceptUserAgreementResponse>;
  getUserAgreement(request: dataContracts.GetUserAgreementRequest): Observable<dataContracts.GetUserAgreementResponse>;
}
