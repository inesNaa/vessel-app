import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VesselMapComponent } from './vessel-map/vessel-map.component';
import { VesselComponent } from './vessel/vessel.component';
import { VesselListComponent } from './vessel-list/vessel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VesselMapComponent,
    VesselComponent,
    VesselListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
