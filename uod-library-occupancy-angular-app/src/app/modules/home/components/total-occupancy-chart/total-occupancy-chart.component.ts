import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SectionData, HourData } from '../../../../store/occupancy.models';
import { selectOccupancyDataBySectionId } from '../../../../store/occupancy.selectors';
import { OccupancyState } from '../../../../store/occupancy.models';

@Component({
  selector: 'app-total-occupancy-chart',
  templateUrl: './total-occupancy-chart.component.html',
  styleUrls: ['./total-occupancy-chart.component.scss']
})
export class TotalOccupancyChartComponent implements OnInit {
  occupancy: number = 1;
  backgroundColor: string = 'green';
  widthPercentage: string = '1';
  sectionDataItem$: Observable<SectionData | undefined> | undefined;

  constructor(private store: Store<OccupancyState>) { }

  ngOnInit(): void {
    // Use the selector to get the occupancy data for section 1
    this.sectionDataItem$ = this.store.pipe(select(selectOccupancyDataBySectionId(1)));
    this.sectionDataItem$.subscribe((dataItem: SectionData | undefined) => {
      if (dataItem) {
        const currentOccupancyPercentage = dataItem.current_occupancy_percentage; 
        if (currentOccupancyPercentage !== undefined) { 
          this.occupancy = Math.round(currentOccupancyPercentage);
          this.setWidthPercentage();
          this.setBackgroundColor();
        }
      }
    });
  }

  private setBackgroundColor(): void {
    if (this.occupancy >= 0 && this.occupancy <= 50) {
      this.backgroundColor = 'var(--color-ui-green)';
    } else if (this.occupancy >= 51 && this.occupancy <= 75) {
      this.backgroundColor = 'var(--color-ui-yellow)';
    } else if (this.occupancy >= 76) {
      this.backgroundColor = 'var(--color-ui-red)';
    } else {
      this.backgroundColor = 'grey';
    }
  }

  private setWidthPercentage(): void {
    let percentage = this.occupancy;

    // Ensure percentage is within the range [10, 90]
    if (percentage < 5) {
      percentage = 5;
    } else if (percentage > 95) {
      percentage = 95;
    }

    this.widthPercentage = percentage.toString().concat('%');
  }
}
