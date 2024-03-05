import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyDescriptionBadgeComponent } from './occupancy-description-badge.component';

describe('OccupancyDescriptionBadgeComponent', () => {
  let component: OccupancyDescriptionBadgeComponent;
  let fixture: ComponentFixture<OccupancyDescriptionBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OccupancyDescriptionBadgeComponent]
    });
    fixture = TestBed.createComponent(OccupancyDescriptionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
