import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { HourTemplate } from "../templates/hour-col-template.model";

@Component({
  selector: '[app-hour-col]',
  templateUrl: './hour-col.component.html',
  styleUrls: ['./hour-col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourColComponent {
  @Input() colData: HourTemplate = { time: '12AM', value: 0, current: false };
  @Input() currentHour: boolean = false;

}
