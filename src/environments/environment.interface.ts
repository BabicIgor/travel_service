export enum EnvironmentEnum {
  DEVELOPMENT = 0,
  LOCAL,
  PRODUCTION
}

export interface IEnvironment {
  environment: EnvironmentEnum,
  bearerToken: string;
  clientServiceEndpoint: string;
  consoleAppEndpoint: string;
  invoiceServiceEndpoint: string;
  marketplaceServiceEndpoint: string;
  operatorServiceEndpoint: string;
  orderServiceEndpoint: string;
  offerServiceEndpoint: string;
  productServiceEndpoint: string;
}
