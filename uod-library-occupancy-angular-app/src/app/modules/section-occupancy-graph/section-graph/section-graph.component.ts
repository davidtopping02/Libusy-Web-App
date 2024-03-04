import { Component, Input, OnInit } from '@angular/core';
import { SectionData } from 'src/app/store/occupancy.models';
import { HourTemplate } from '../templates/hour-col-template.model';

@Component({
  selector: 'app-section-graph',
  templateUrl: './section-graph.component.html',
  styleUrls: ['./section-graph.component.scss']
})
export class SectionGraphComponent implements OnInit {

  @Input() sectionData!: SectionData;
  dayArray: HourTemplate[] = [];

  ngOnInit(): void {
    this.initializeDayArray();
  }

  constructor() {
  }

  private initializeDayArray(): void {
    const currentHour = new Date().getHours();
    this.dayArray = Array.from({ length: 12 }, (_, i) => {
      const hour = (currentHour - 2 + i + 24) % 24;
      if (hour === 0) {
        return null; // Skip this hour
      }
      const isCurrent = currentHour === hour;

      // Convert 24-hour time to 12-hour format and add AM or PM
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const amPm = hour < 12 || hour === 24 ? 'am' : 'pm';
      const hourFormatted = `${displayHour}${amPm}`.padStart(2, '0'); // Padding might not be necessary due to string suffix

      let value = 10; // Default value
      if (this.sectionData && this.sectionData.hours) {
        const hourData = this.sectionData.hours.find((data: any) => {
          const dataHour = Number(data.time.split(':')[0]) % 24;
          return dataHour === hour;
        });
        if (hourData) {
          // Check if occupancy_percentage is greater than 100
          value = hourData.occupancy_percentage > 100 ? 100 : hourData.occupancy_percentage;
        }
      }
      return {
        time: hourFormatted,
        value: value,
        current: isCurrent
      } as HourTemplate | null;
    }).filter((hour): hour is HourTemplate => hour !== null); // Filter out null entries
  }





}
