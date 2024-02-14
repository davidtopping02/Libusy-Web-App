import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourColComponent } from './hour-col.component';

describe('HourColComponent', () => {
  let component: HourColComponent;
  let fixture: ComponentFixture<HourColComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourColComponent]
    });
    fixture = TestBed.createComponent(HourColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
