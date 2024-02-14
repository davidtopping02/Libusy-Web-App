import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGraphComponent } from './section-graph.component';

describe('SectionGraphComponent', () => {
  let component: SectionGraphComponent;
  let fixture: ComponentFixture<SectionGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionGraphComponent]
    });
    fixture = TestBed.createComponent(SectionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
