import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadOccupancy } from 'src/app/store/occupancy.actions';
import { selectOccupancyStatus } from './store/occupancy.selectors';
import { timer, combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    const occupancyStatus$ = this.store.pipe(select(selectOccupancyStatus));
    const timer$ = timer(2000);

    combineLatest([occupancyStatus$, timer$]).pipe(
      map(([status, _]) => status),
      filter(status => status === 'success'),
      take(1)
    ).subscribe(() => {
      this.isLoading = false;
    });

    // New addition: Subscribe to the entire store state and log it.
    this.store.subscribe(state => {
      console.log('Current store state:', state);
    });

    this.store.dispatch(loadOccupancy());
  }
}
