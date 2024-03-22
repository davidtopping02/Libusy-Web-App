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
  currentDayIndex: number = new Date().getDay();
  isCurrentDay: boolean = true; 


  ngOnInit(): void {
    this.initializeDayArray(this.currentDayIndex); // Initialize with current day index
  }

  constructor() {}

  handleDaySelected(dayIndex: string) {
    const selectedDayIndex = parseInt(dayIndex, 10);
    this.currentDayIndex = selectedDayIndex; 
    this.isCurrentDay = this.currentDayIndex === new Date().getDay();
    this.initializeDayArray(this.currentDayIndex);
}

  private initializeDayArray(dayIndex: number): void {
    const currentDayIndex = new Date().getDay();
    const currentHour = new Date().getHours();
    const isCurrentDay = dayIndex === currentDayIndex;
    const todayOccupancy = this.sectionData.occupancy ? this.sectionData.occupancy[dayIndex] : [];

    this.dayArray = Array.from({ length: 24 }, (_, hour) => {
      const hourFormatted = `${hour.toString().padStart(2, '0')}:00`;
      const isCurrent = isCurrentDay && currentHour === hour;

      let value = this.getOccupancyValue(hour, todayOccupancy);
      return { time: hourFormatted, value, current: isCurrent } as HourTemplate;
    });
  }

  private getOccupancyValue(hour: number, todayOccupancy: HourData[]): number {
    let value = 5; // Default value or a fallback
    const hourData = todayOccupancy.find((data: HourData) => {
      const dataHour = Number(data.time.split(':')[0]);
      return dataHour === hour;
    });
    if (hourData) {
      value = hourData.occupancy_percentage > 100 ? 100 : hourData.occupancy_percentage;
    }
    return value;
  }
  
}
