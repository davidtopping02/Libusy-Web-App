// src/app/store/occupancy/occupancy.actions.ts
import { createAction, props } from '@ngrx/store';
import { OccupancyDataItem } from './occupancy.models';

export const loadOccupancy = createAction('[Home] Load Occupancy');
export const loadOccupancySuccess = createAction('[Occupancy] Load Occupancy Success', props<{ data: OccupancyDataItem[] }>());
export const loadOccupancyFailure = createAction('[Occupancy] Load Occupancy Failure', props<{ error: string }>());
