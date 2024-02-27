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
      // Skip hour 24 (which is hour 0 in 24-hour format)
      if (hour === 0) {
        return null; // Skip this hour
      }
      const isCurrent = currentHour === hour; // Check if this hour is the current hour

      // Represent the hour in 24-hour format
      const displayHour = hour;
      const hourFormatted = `${displayHour}`.padStart(2, '0'); // Pad single-digit hours with leading zero

      let value = 10;
      // Check if there's data available for this hour in sectionData
      if (this.sectionData && this.sectionData.hours) {
        const hourData = this.sectionData.hours.find((data: any) => {
          // Extract only the hour part from the time (e.g., "16" from "16:00")
          const dataHour = Number(data.time.split(':')[0]);
          return dataHour === hour;
        });
        // If data available, use its value
        if (hourData) {
          value = hourData.occupancy_percentage;
        }
      }

      // Format the time with the hour only, keeping it in 24-hour format
      return {
        time: hourFormatted,
        value: value,
        current: isCurrent
      } as HourTemplate | null;
    }).filter((hour): hour is HourTemplate => hour !== null); // Filter out null entries and adjust the typing
  }



}
