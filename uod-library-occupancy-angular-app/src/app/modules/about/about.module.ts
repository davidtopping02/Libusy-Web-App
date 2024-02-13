import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
