import { Component, Input, OnInit } from '@angular/core';
import { SectionData, HourData } from 'src/app/store/occupancy.models';
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
    const currentDayIndex = new Date().getDay();
    const currentHour = new Date().getHours();
    const todayOccupancy = this.sectionData.occupancy ? this.sectionData.occupancy[currentDayIndex] : [];
  
    this.dayArray = Array.from({ length: 12 }, (_, i) => {
      const hour = (currentHour - 2 + i + 24) % 24; 
      const isCurrent = currentHour === hour;
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const amPm = hour < 12 || hour === 24 ? 'am' : 'pm';
      const hourFormatted = `${displayHour}${amPm}`.padStart(2, '0');
  
      // Default value or perhaps a default if no data is present
      let value = 10; 
      const hourData = todayOccupancy.find((data: HourData) => {
        const dataHour = Number(data.time.split(':')[0]);
        return dataHour === hour;
      });
      if (hourData) {
        value = hourData.occupancy_percentage > 100 ? 100 : hourData.occupancy_percentage;
      }
      return {
        time: hourFormatted,
        value: value,
        current: isCurrent
      } as HourTemplate;
    }).filter((hour): hour is HourTemplate => hour !== null);
  }
}
