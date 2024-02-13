import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-occupancy-chart',
  templateUrl: './total-occupancy-chart.component.html',
  styleUrls: ['./total-occupancy-chart.component.scss']
})


export class TotalOccupancyChartComponent implements OnChanges {
  @Input() occupancy: number = 1;
  backgroundColor: string = 'green';
  widthPercentage: string = '1';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['occupancy']) {
      this.setBackgroundColor();
      this.setWidthPercentage();
    }
  }

  private setBackgroundColor(): void {
    if (this.occupancy >= 0 && this.occupancy <= 50) {
      this.backgroundColor = 'var(--color-ui-green)';
    } else if (this.occupancy >= 51 && this.occupancy <= 75) {
      this.backgroundColor = 'var(--color-ui-yellow)';
    } else if (this.occupancy >= 76 && this.occupancy <= 100) {
      this.backgroundColor = 'var(--color-ui-red)';
    } else {
      this.backgroundColor = 'grey';
    }
  }

  private setWidthPercentage(): void {
    if (this.occupancy <= 50) {
      this.widthPercentage = '40%';
    } else if (this.occupancy <= 75) {
      this.widthPercentage = '70%';
    } else {
      this.widthPercentage = '90%';
    }
  }
}