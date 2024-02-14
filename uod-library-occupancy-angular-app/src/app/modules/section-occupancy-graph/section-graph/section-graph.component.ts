import { Component } from '@angular/core';
import { HourTemplate } from '../templates/hour-col-template.model';

@Component({
  selector: 'app-section-graph',
  templateUrl: './section-graph.component.html',
  styleUrls: ['./section-graph.component.scss']
})
export class SectionGraphComponent {

  // generates an array of HourTemplate objects representing 12 hours, populating each object with the time (formatted with AM or PM), a random number value, and a boolean indicating whether it's the current hour. 
  dayArray: HourTemplate[] = Array.from({ length: 12 }, (_, i) => {

    const currentHour = new Date().getHours();
    const hour = currentHour - 2 + i;
    const normalizedHour = hour % 24;
    const amPm = normalizedHour >= 12 ? 'PM' : 'AM';
    const displayHour = normalizedHour > 12 ? normalizedHour - 12 : normalizedHour === 0 ? 12 : normalizedHour;
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const isCurrent = i === 2;
    return {
      time: `${displayHour}${amPm}`,
      value: randomNum,
      current: isCurrent
    };
  });

}
