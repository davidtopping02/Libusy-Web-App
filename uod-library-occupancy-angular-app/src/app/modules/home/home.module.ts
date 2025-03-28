import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SectionOccupancyGraphModule } from '../section-occupancy-graph/section-occupancy-graph.module';

import { HomeComponent } from './components/home/home.component';
import { TotalOccupancyChartComponent } from './components/total-occupancy-chart/total-occupancy-chart.component';

@NgModule({
  declarations: [
    HomeComponent,
    TotalOccupancyChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SectionOccupancyGraphModule
  ]
})
export class HomeModule { }
