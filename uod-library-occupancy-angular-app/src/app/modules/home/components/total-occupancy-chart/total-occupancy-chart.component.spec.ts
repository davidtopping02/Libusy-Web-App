import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOccupancyChartComponent } from './total-occupancy-chart.component';

describe('TotalOccupancyChartComponent', () => {
  let component: TotalOccupancyChartComponent;
  let fixture: ComponentFixture<TotalOccupancyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalOccupancyChartComponent]
    });
    fixture = TestBed.createComponent(TotalOccupancyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
