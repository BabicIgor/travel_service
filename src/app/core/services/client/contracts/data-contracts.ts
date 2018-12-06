import * as models from '../../../models';

export class SearchClientsRequest {
  public name: string;
  public dob: string;
  public email: string;
  public limit: number;
  public phone: string;
  public offset: number;
}

export class SearchClientsResponse {
  public entities: Array<models.Client>;
  public count: number;
}
