import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SectionData } from 'src/app/store/occupancy.models';
import { selectOccupancyData } from 'src/app/store/occupancy.selectors'; // Adjust the path as necessary

@Component({
  selector: 'app-section-accordion',
  templateUrl: './section-accordion.component.html',
  styleUrls: ['./section-accordion.component.scss']
})
export class SectionAccordionComponent implements OnInit {
  sectionData$: Observable<SectionData[]>;

  constructor(private store: Store) {
    this.sectionData$ = this.store.select(selectOccupancyData);
  }

  ngOnInit(): void {
  }
}
