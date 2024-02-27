import { createAction, props } from '@ngrx/store';
import { OccupancyState, SectionData } from './occupancy.models';

export const loadOccupancy = createAction('[Home] Load Occupancy');

// Updated to include fetch_time in success action
export const loadOccupancySuccess = createAction(
    '[Occupancy] Load Occupancy Success',
    props<{ data: SectionData[]; fetch_time: string }>()
);

// Updated failure action to potentially include error details within the state
export const loadOccupancyFailure = createAction(
    '[Occupancy] Load Occupancy Failure',
    props<{ error: any }>() // Using 'any' for error type to allow flexibility
);
