import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HourTemplate } from "../templates/hour-col-template.model";

@Component({
  selector: '[app-hour-col]',
  templateUrl: './hour-col.component.html',
  styleUrls: ['./hour-col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourColComponent {
  @Input() colData: HourTemplate = { time: '12AM', value: 0, current: false };

  // Method to determine the message
  getPopoverMessage(): string {
    if (this.colData.current) {
      return `The current occupancy is ${this.colData.value}%`;
    } else {
      // Assuming you have a way to determine if the time is in the past
      const isPast = this.isTimePast(this.colData.time);
      if (isPast) {
        return `The occupancy at ${this.colData.time} was ${this.colData.value}%`;
      } else {
        return `The occupancy at ${this.colData.time} is estimated to be ${this.colData.value}%`;
      }
    }
  }

  private isTimePast(time: string): boolean {
    // Get the current date and time
    const now = new Date();

    // Convert the 12-hour time format to 24-hour to make it easier to work with
    const hours24 = this.convertTo24Hour(time);

    // Create a new Date object representing the time today
    const timeToday = new Date(now);
    timeToday.setHours(hours24, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds

    // Compare the timeToday with the current time
    return timeToday < now;
  }

  // Helper function to convert 12-hour formatted string to 24-hour time
  private convertTo24Hour(time: string): number {
    let [hours, modifier] = time.split(/(AM|PM)/i);
    let hoursInt = parseInt(hours, 10);

    // Handle midnight and noon
    if (hoursInt === 12) {
      hoursInt = modifier.toUpperCase() === 'AM' ? 0 : 12;
    } else if (modifier.toUpperCase() === 'PM') {
      hoursInt += 12;
    }

    return hoursInt;
  }
}