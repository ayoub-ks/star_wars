import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './core/planet/planet.component';
import { SpaceComponent } from './core/space/space.component';
import { SpaceService } from './services/space.service';


@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    SpaceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SpaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
