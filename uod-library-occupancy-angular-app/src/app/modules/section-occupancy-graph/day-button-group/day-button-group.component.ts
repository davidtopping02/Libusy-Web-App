import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-day-button-group',
  templateUrl: './day-button-group.component.html',
  styleUrls: ['./day-button-group.component.scss']
})
export class DayButtonGroupComponent {
  daysOfWeek = ['0', '1', '2', '3', '4', '5', '6']; 
  selectedDay: string | undefined;

  @Output() daySelected = new EventEmitter<string>();

  constructor() {
    const currentDayIndex = new Date().getDay().toString();
    this.selectedDay = currentDayIndex; 
  }

  isSelected(day: string): boolean {
    return this.selectedDay === day;
  }

  selectDay(day: string): void {
    this.selectedDay = day; 
    this.daySelected.emit(day); 
  }

  getDayName(dayIndex: number): string {
    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; 
    return dayNames[dayIndex]; 
  }
}
