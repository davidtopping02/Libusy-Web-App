import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionGraphComponent } from './section-graph/section-graph.component';
import { HourColComponent } from './hour-col/hour-col.component';



@NgModule({
  declarations: [
    SectionGraphComponent,
    HourColComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SectionGraphComponent
  ]

})
export class SectionOccupancyGraphModule { }
