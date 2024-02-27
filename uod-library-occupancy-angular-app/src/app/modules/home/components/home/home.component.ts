import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { loadOccupancy } from 'src/app/store/occupancy.actions';
import { selectOccupancyData } from 'src/app/store/occupancy.selectors'; // Assuming you have this selector

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadOccupancy());
  }

  ngOnDestroy() {
    // Complete the unsubscribe$ observable to clean up the subscription
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}