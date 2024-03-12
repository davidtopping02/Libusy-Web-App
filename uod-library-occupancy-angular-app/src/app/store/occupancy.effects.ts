import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as OccupancyActions from './occupancy.actions';
import { ApiService } from '../core/services/api.service';
import { OccupancyState } from './occupancy.models'; 

@Injectable()
export class OccupancyEffects {
    loadOccupancy$ = createEffect(() => this.actions$.pipe(
        ofType(OccupancyActions.loadOccupancy),
        mergeMap(() => this.apiService.getOccupancyData()
            .pipe(
                map((occupancyState: OccupancyState) => OccupancyActions.loadOccupancySuccess({
                    occupancyState 
                })),
                catchError(error => of(OccupancyActions.loadOccupancyFailure({ error })))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}