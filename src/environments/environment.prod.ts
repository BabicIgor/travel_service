import {EnvironmentEnum, IEnvironment} from './environment.interface';

export const environment: IEnvironment = {
  bearerToken: null,
  environment: EnvironmentEnum.PRODUCTION,
  clientServiceEndpoint: null,
  consoleAppEndpoint: null,
  invoiceServiceEndpoint: null,
  marketplaceServiceEndpoint: null,
  operatorServiceEndpoint: null,
  orderServiceEndpoint: null,
  offerServiceEndpoint: null,
  productServiceEndpoint: null,
};
