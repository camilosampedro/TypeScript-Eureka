import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './ponyracer-app.component';
platformBrowserDynamic().bootstrapModule(PonyRacerAppComponent);

/*bootstrap(PonyRacerAppComponent)
    .catch(err => console.log(err));*/