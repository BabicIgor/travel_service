import {IEnvironment, EnvironmentEnum} from './environment.interface';

export const environment: IEnvironment = {
  bearerToken: 'DEV_TOKEN',
  environment: EnvironmentEnum.LOCAL,
  clientServiceEndpoint: null,
  consoleAppEndpoint: null,
  invoiceServiceEndpoint: null,
  marketplaceServiceEndpoint: null,
  operatorServiceEndpoint: null,
  orderServiceEndpoint: null,
  offerServiceEndpoint: null,
  productServiceEndpoint: null
};
