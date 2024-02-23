import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { occupancyReducer } from './store/occupancy.reducer';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { OccupancyEffects } from './store/occupancy.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({ occupancy: occupancyReducer }),
    EffectsModule.forRoot([OccupancyEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
