import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { loadOccupancy } from 'src/app/store/occupancy.actions';
import { selectOccupancyData, selectFetchTime } from 'src/app/store/occupancy.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  fetchTime$!: Observable<string>; // Initialize fetchTime$ with ! operator

  occupancyData: any; // Change the type according to your store structure

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadOccupancy());
    this.fetchTime$ = this.store.pipe(select(selectFetchTime));

  }

  ngOnDestroy() {
    // Complete the unsubscribe$ observable to clean up the subscription
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
