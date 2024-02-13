import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';

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
    CoreModule
  ]
})
export class HomeModule { }
