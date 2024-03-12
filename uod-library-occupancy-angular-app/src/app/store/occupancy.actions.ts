import { createAction, props } from '@ngrx/store';
import { OccupancyState } from './occupancy.models';

export const loadOccupancy = createAction('[Home] Load Occupancy');

export const loadOccupancySuccess = createAction(
    '[Occupancy] Load Occupancy Success',
    props<{ occupancyState: OccupancyState }>()
);

export const loadOccupancyFailure = createAction(
    '[Occupancy] Load Occupancy Failure',
    props<{ error: any }>()
);
