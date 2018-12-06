import {IEnvironment, EnvironmentEnum} from './environment.interface';

export const environment: IEnvironment = {
  environment: EnvironmentEnum.DEVELOPMENT,
  bearerToken: null,
  clientServiceEndpoint: null,
  consoleAppEndpoint: null,
  invoiceServiceEndpoint: null,
  marketplaceServiceEndpoint: null,
  operatorServiceEndpoint: null,
  orderServiceEndpoint: null,
  offerServiceEndpoint: null,
  productServiceEndpoint: null,
};
