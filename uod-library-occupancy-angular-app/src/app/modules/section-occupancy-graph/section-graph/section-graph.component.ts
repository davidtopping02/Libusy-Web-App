import { Component } from '@angular/core';
import { HourTemplate } from '../templates/hour-col-template.model';

@Component({
  selector: 'app-section-graph',
  templateUrl: './section-graph.component.html',
  styleUrls: ['./section-graph.component.scss']
})
export class SectionGraphComponent {

  dayArray: HourTemplate[] = [];

  constructor() {
    this.initializeDayArray();
  }

  private initializeDayArray(): void {
    const currentHour = new Date().getHours();
    this.dayArray = Array.from({ length: 12 }, (_, i) => {
      const hour = (currentHour - 2 + i + 24) % 24; // Adjust for hours less than 0
      const amPm = hour >= 12 ? 'p' : 'a';
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const randomNum = Math.floor(Math.random() * 100) + 1;
      const isCurrent = currentHour === hour; // Check if this hour is the current hour
      return {
        time: `${displayHour}${amPm}`,
        value: randomNum,
        current: isCurrent
      } as HourTemplate;
    });
  }
}
