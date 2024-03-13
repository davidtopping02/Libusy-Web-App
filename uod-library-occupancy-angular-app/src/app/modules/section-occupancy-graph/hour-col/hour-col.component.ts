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


  isEvenHour(): boolean {
    const hourMatch = this.colData.time.match(/\d+/);
    const hour = hourMatch ? parseInt(hourMatch[0], 10) : null;
    return hour !== null ? hour % 2 === 0 : false;
  }

  formatTime(time: string): string {
      return time.replace(':00', '');
  }

  getPopoverMessage(): string {
    return `${this.colData.time}:  ${this.colData.value}%`;
  }
}