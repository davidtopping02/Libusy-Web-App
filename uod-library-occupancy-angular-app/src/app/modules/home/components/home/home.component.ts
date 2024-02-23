import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { loadOccupancy } from 'src/app/store/occupancy.actions';
import { OccupancyDataItem } from 'src/app/store/occupancy.models';
import { selectOccupancyData, selectOccupancyError, selectOccupancyStatus } from 'src/app/store/occupancy.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  occupancy$: Observable<OccupancyDataItem[]>;
  error$: Observable<string>;
  status$: Observable<string>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store) {
    this.occupancy$ = this.store.select(selectOccupancyData);
    this.error$ = this.store.select(selectOccupancyError);
    this.status$ = this.store.select(selectOccupancyStatus);
  }

  ngOnInit() {
    this.store.dispatch(loadOccupancy());
  }

  ngOnDestroy() {
    // Complete the unsubscribe$ observable to clean up the subscription
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
