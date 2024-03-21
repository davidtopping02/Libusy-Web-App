import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { selectFetchTime, selectTotalCurrentOccupancy  } from 'src/app/store/occupancy.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  fetchTime$!: Observable<string>;
  totalCurrentOccupancy$!: Observable<number | undefined>;
  occupancyData: any;


  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.fetchTime$ = this.store.pipe(
      select(selectFetchTime),
      map((timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
      }),
      takeUntil(this.unsubscribe$)
    );

    this.totalCurrentOccupancy$ = this.store.pipe(
      select(selectTotalCurrentOccupancy),
      takeUntil(this.unsubscribe$)
    );

    this.totalCurrentOccupancy$.subscribe((percentage: number | undefined) => {
      this.occupancyData = percentage;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
