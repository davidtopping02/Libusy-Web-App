import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayButtonGroupComponent } from './day-button-group.component';

describe('DayButtonGroupComponent', () => {
  let component: DayButtonGroupComponent;
  let fixture: ComponentFixture<DayButtonGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayButtonGroupComponent]
    });
    fixture = TestBed.createComponent(DayButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
