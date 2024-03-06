import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MdbCollapseModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    HttpClientModule,
    SplashScreenComponent
  ]
})
export class CoreModule { }
