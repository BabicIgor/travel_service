export interface IConfigService {
  get(key: string): string;
  load(): Promise<any>;
}
