import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionGraphComponent } from './section-graph/section-graph.component';
import { HourColComponent } from './hour-col/hour-col.component';
import { SectionAccordionComponent } from './section-accordion/section-accordion.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { OccupancyDescriptionBadgeComponent } from './occupancy-description-badge/occupancy-description-badge.component';



@NgModule({
  declarations: [
    SectionGraphComponent,
    HourColComponent,
    SectionAccordionComponent,
    OccupancyDescriptionBadgeComponent
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
