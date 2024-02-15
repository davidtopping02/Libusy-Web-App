import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionGraphComponent } from './section-graph/section-graph.component';
import { HourColComponent } from './hour-col/hour-col.component';
import { SectionAccordionComponent } from './section-accordion/section-accordion.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';



@NgModule({
  declarations: [
    SectionGraphComponent,
    HourColComponent,
    SectionAccordionComponent
  ],
  imports: [
    CommonModule,
    MdbAccordionModule
  ],
  exports: [
    SectionAccordionComponent
  ]

})
export class SectionOccupancyGraphModule { }
