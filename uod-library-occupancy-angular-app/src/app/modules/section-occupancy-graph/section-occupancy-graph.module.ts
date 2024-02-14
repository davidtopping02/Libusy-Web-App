import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionGraphComponent } from './sectionOccupancyGraph/section-graph/section-graph.component';



@NgModule({
  declarations: [
    SectionGraphComponent,
  ],
  imports: [CommonModule],
  exports: [SectionGraphComponent]

})
export class SectionOccupancyGraphModule { }
