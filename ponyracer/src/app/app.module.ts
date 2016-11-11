import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {PonyComponent} from './pony/pony.component';
import {RacesComponent} from './races/races.component';

import {RaceService} from './race.service'
import {FakeraceService} from "./fakerace.service";

const IS_PROD = false;

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
    provide: RaceService,
    useClass:  IS_PROD ? RaceService : FakeraceService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
