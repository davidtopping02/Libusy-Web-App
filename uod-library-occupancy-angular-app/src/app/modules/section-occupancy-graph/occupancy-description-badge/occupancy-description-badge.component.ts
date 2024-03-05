
import { Component, Input, OnInit } from '@angular/core';
import { SectionData } from 'src/app/store/occupancy.models';
import { HourTemplate } from '../templates/hour-col-template.model';

@Component({
  selector: 'app-occupancy-description-badge',
  templateUrl: './occupancy-description-badge.component.html',
  styleUrls: ['./occupancy-description-badge.component.scss']
})
export class OccupancyDescriptionBadgeComponent implements OnInit {

  @Input() sectionData!: SectionData;
  occupancyLevel: { class: string, text: string } = { class: '', text: '' };

  constructor() {
  }

  ngOnInit(): void {
    const currentHour = new Date().getHours();
    let occupancyPercentage = this.sectionData.hours
      .filter((data: any) => Number(data.time.split(':')[0]) === currentHour)
      .map((data: any) => data.occupancy_percentage > 100 ? 100 : data.occupancy_percentage)[0] || 10;

    // Set the occupancy level based on the calculated percentage
    this.setOccupancyLevel(occupancyPercentage);
  }

  setOccupancyLevel(percentage: number): void {
    if (percentage <= 25) {
      this.occupancyLevel = { class: 'badge-success', text: 'Quiet' };
    } else if (percentage <= 60) {
      this.occupancyLevel = { class: 'badge-success', text: 'Moderate' };
    } else if (percentage <= 85) {
      this.occupancyLevel = { class: 'badge-warning ', text: 'Busy' };
    } else {
      this.occupancyLevel = { class: 'badge-danger', text: 'Very Busy' };
    }
  }

}
