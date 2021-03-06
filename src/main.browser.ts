import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';

import '../node_modules/bootstrap/dist/js/bootstrap';
// import './assets/pages/js/pages';
import './dummy/styles.css';
import { AppModule } from './app';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    // .then(decorateModuleRef)
    .catch(err => console.error(err));


}

export function main() {
	
}

bootloader(main);
