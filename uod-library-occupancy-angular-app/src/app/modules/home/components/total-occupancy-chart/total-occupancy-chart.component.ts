import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OccupancyDataItem } from '../../../../store/occupancy.models';
import { selectOccupancyDataBySectionId } from '../../../../store/occupancy.selectors';

@Component({
  selector: 'app-total-occupancy-chart',
  templateUrl: './total-occupancy-chart.component.html',
  styleUrls: ['./total-occupancy-chart.component.scss']
})


export class TotalOccupancyChartComponent implements OnInit {
  occupancy: number = 1;
  backgroundColor: string = 'green';
  widthPercentage: string = '1';
  occupancyDataItem$: Observable<OccupancyDataItem | undefined> | undefined;

  constructor(private store: Store) { }


  ngOnInit(): void {
    // Use the selector to get the occupancy data for section 1
    this.occupancyDataItem$ = this.store.pipe(select(selectOccupancyDataBySectionId(1)));
    this.occupancyDataItem$.subscribe((dataItem: OccupancyDataItem | undefined) => {
      if (dataItem) {
        this.occupancy = Math.round(dataItem.occupancy_percentage);
        this.setWidthPercentage();
        this.setBackgroundColor();
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
    if (percentage < 10) {
      percentage = 10;
    } else if (percentage > 90) {
      percentage = 90;
    }

    this.widthPercentage = percentage.toString().concat("%");
  }

}