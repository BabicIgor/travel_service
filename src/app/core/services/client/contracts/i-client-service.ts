import * as dataContracts from './data-contracts';
import {Observable} from 'rxjs/Observable';


export interface IClientService {
  searchClients(request: dataContracts.SearchClientsRequest) : Observable<dataContracts.SearchClientsResponse>;
}
